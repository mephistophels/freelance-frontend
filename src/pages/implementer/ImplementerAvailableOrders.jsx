import React, {useEffect, useState} from 'react';
import {api} from '../../api';
import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import Search, {InputWithButton} from '../../components/Search/Search';
import {PAGINATION, PATH, TASK_STATUS} from "../../consts";
import {useForm, usePagination, useQuery} from '../../hooks';
import {showAlert} from '../../utils';
import {TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

const ImplementerAvailableOrders = () => {

    const pagination = usePagination();
    const [tasks] = useQuery(api.order.getAvailableOrdersList)
    const {search, values} = useForm({search: ''})
    const filt = task => task.content.toLowerCase().includes(values.search.toLowerCase()) || task.title.toLowerCase().includes(values.search.toLowerCase())
    return (
        <div>
            <br/>
            <TextInput {...search} w='100%' leftSection={<IconSearch style={{ width: 18, height: 18 }} stroke={1.5} />}/>

            <br/>
            {tasks.content && <OrderList tasks={tasks.content.filter(filt)} type={PATH.IMPLEMENTOR_EXCHANGE}/>}
            <br/>
            <Pagination {...pagination}/>
        </div>
    );
};

export default ImplementerAvailableOrders;