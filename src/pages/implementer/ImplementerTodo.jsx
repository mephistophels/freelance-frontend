import React, { useEffect, useState } from 'react';
import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import Search, {InputWithButton} from '../../components/Search/Search';
import {PAGINATION, PATH, TASK_STATUS} from "../../consts";
import {useForm, usePagination, useQuery} from '../../hooks';
import { showAlert } from '../../utils';
import { api } from '../../api';
import {Empty} from "../../components/Empty";
import {TextInput} from "@mantine/core";
import {getTodoOrdersList} from "../../api/actions/order";
import {IconSearch} from "@tabler/icons-react";

const ImplementerTodo = () => {

  const [tasks] = useQuery(getTodoOrdersList)
  const pagination = usePagination();
    const {search, values} = useForm({search: ''})
    const filt = task => task.content.toLowerCase().includes(values.search.toLowerCase()) || task.title.toLowerCase().includes(values.search.toLowerCase())

  return (
    <div>
      <br />
        <TextInput {...search} w='100%' leftSection={<IconSearch style={{ width: 18, height: 18 }} stroke={1.5} />}/>

        <br/>
        {!tasks.length && <Empty/>}
        {tasks&& <OrderList tasks={tasks.content.filter(filt)} type={PATH.ORDERS_OF_IMPLEMENTOR}/>}
      <br />
      <Pagination {...pagination} />
    </div>
  );
};

export default ImplementerTodo;