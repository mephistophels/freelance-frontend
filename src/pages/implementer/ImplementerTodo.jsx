import { useEffect, useState } from 'react';
import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import Search, {InputWithButton} from '../../components/Search/Search';
import {PAGINATION, PATH, TASK_STATUS} from "../../consts";
import { usePagination } from '../../hooks';
import { showAlert } from '../../utils';
import { api } from '../../api';
import {Empty} from "../../components/Empty";

const ImplementerTodo = () => {

  const [tasks, setTasks] = useState([]);
  const pagination = usePagination();
  useEffect(() => {
      api.order.getTodoOrdersList({
          size: PAGINATION.SIZE,
          page: pagination.page,
      })
      .then(data => {
        console.log(data.data);
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
      <InputWithButton/>
      <br/>
        {!tasks.length && <Empty/>}
      <OrderList tasks={tasks} type={PATH.ORDERS_OF_IMPLEMENTOR}/>
      <br />
      <Pagination {...pagination} />
    </div>
  );
};

export default ImplementerTodo;