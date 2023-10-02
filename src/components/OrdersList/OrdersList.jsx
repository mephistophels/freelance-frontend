import { useLocation } from 'react-router-dom';
import OrderCard from './OrderCard/OrderCard';
import OrderCardFinish from './OrderCardFinish/OrderCardFinish';
import OrderCardClient from './OrderCardClient/OrderCardClient';
import OrderCardReady from './OrderCardReady/OrderCardReady';

const getCardElement = path => {
  switch (path) {
    case '/implementer': return OrderCard;
    case '/implementertodo': return OrderCardFinish;
    case '/client': return OrderCardClient;
    case '/clienttodo': return OrderCardReady;
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