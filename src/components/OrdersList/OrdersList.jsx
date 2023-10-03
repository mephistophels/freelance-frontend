import OrderCard from './OrderCard/OrderCard';
import {PATH} from "../../consts";

function TypedOrderCard({type, task}){
  const { status } = task;
  switch (type) {
    case PATH.ORDERS_OF_IMPLEMENTOR: return <OrderCard {...task} navigateTo={`${PATH.IMPLEMENTOR_PRESENTATION_ORDER_ID}${task.id}`} showStatus/>
    case PATH.IMPLEMENTOR_EXCHANGE: return <OrderCard {...task} navigateTo={`/implementer/${task.id}`} />
    case PATH.ORDERS_OF_CLIENT:
      switch (status) {
        case 'done': return <OrderCard {...task} showStatus/>
        case 'in progress': return <OrderCard {...task} showStatus/>
        case 'created': return <OrderCard {...task} showStatus showWatchResponsesLink showGarbage/>
      }
  }
}
const OrderList = ({tasks, type}) => {
  return (
    <div>
      {
        tasks.map((task) => (
          <TypedOrderCard type={type} task={task}/>
        ))
      }
    </div>
  );
};

export default OrderList;