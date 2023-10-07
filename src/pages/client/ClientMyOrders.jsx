import {Button, Group, rem, TextInput} from '@mantine/core';
import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import {InputWithButton} from '../../components/Search/Search';
import {Link, useNavigate} from 'react-router-dom';
import {PAGINATION, PATH, TASK_STATUS} from "../../consts";
import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import { showAlert } from '../../utils';
import {useForm, usePagination, useQuery} from '../../hooks';
import {Empty} from "../../components/Empty";
import { useMediaQuery } from '@mantine/hooks';
import {getMyOrdersList} from "../../api/actions/order";
import {IconSearch} from "@tabler/icons-react";

const ClientMyOrders = () => {
    
    const largeMenu = useMediaQuery('(min-width: 650px)');

    const [tasks] = useQuery(getMyOrdersList)
    const pagination = usePagination();
    const {search, values} = useForm({search: ''})
    const filt = task => task.content.toLowerCase().includes(values.search.toLowerCase()) || task.title.toLowerCase().includes(values.search.toLowerCase())
    console.log(tasks)
    return (
        <div>
            <br />
            <Group display={largeMenu ? 'flex' : 'block'} justify="space-between" wrap='nowrap'>
                <TextInput {...search} w='100%' leftSection={<IconSearch style={{ width: 18, height: 18 }} stroke={1.5} />}/>
                <br />
                <Link to={PATH.CLIENT_CREATE_ORDER}>
                    <Button style={{width:'100%'}}>Создать заказ</Button>
                </Link>
            </Group>
            <br/>
            {!tasks?.content?.length && <Empty/>}
            {tasks && <OrderList tasks={tasks.content.filter(filt)} type={PATH.ORDERS_OF_CLIENT}/>}
            <br/>
            <Pagination {...pagination}/>
        </div>
);
};

export default ClientMyOrders;