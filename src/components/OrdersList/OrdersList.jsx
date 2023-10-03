import { useLocation } from 'react-router-dom';
import OrderCard from './OrderCard/OrderCard';
import OrderCardFinish from './OrderCardFinish/OrderCardFinish';
import OrderCardClient from './OrderCardClient/OrderCardClient';

const getCardElement = path => {
  switch (path) {
    case '/implementer/available': return OrderCard;
    case '/implementer/todo': return OrderCardFinish;
    case '/client/orders/my': return OrderCardClient;
  }
}

const OrderList = ({tasks}) => {

  const location = useLocation().pathname;
  const TaskInstance = getCardElement(location);

  return (
    <div>
      {
        tasks.map((task) => (
          <TaskInstance {...task} key={task.id}/>
        ))
      }
    </div>
  );
};

export default OrderList;