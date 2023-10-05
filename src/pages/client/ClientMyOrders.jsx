import {Button, Group} from '@mantine/core';
import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import {InputWithButton} from '../../components/Search/Search';
import {Link, useNavigate} from 'react-router-dom';
import {PAGINATION, PATH, TASK_STATUS} from "../../consts";
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { showAlert } from '../../utils';
import { usePagination } from '../../hooks';
import {Empty} from "../../components/Empty";

const ClientMyOrders = () => {

    const [tasks, setTasks] = useState([]);
    const pagination = usePagination();
    useEffect(() => {
        api.order.getMyOrdersList({
            size: PAGINATION.SIZE,
            page: pagination.page,
        })
        .then(data => {
            console.log(data)
            setTasks(data.data.content);
            pagination.setTotal(data.data.totalPages);
            pagination.onChange(data.data.page);
        })
        .catch(error => {
            showAlert(error);
            setTasks([]);
        })
    }, [pagination.page]);

    return (
        <div>
            <br />
            <Group justify="space-between" wrap='nowrap'>
                <InputWithButton style={{width:'100%'}}/>
                <Link to={PATH.CLIENT_CREATE_ORDER}>
                    <Button>Создать заказ</Button>
                </Link>
            </Group>
            <br/>
            {!tasks.length && <Empty/>}
            <OrderList tasks={tasks} type={PATH.ORDERS_OF_CLIENT}/>
            <br/>
            <Pagination {...pagination}/>
        </div>
);
};

export default ClientMyOrders;