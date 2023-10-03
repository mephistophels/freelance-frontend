import OrderCard from './OrderCard/OrderCard';
import {PATH, TASK_STATUS} from "../../consts";

export function TypedOrderCard({type, task}){
  const { status } = task;
  switch (type) {
    case PATH.ORDERS_OF_IMPLEMENTOR: return <OrderCard {...task} navigateTo={`${PATH.IMPLEMENTOR_PRESENTATION_ORDER_ID}${task.id}`} showStatus/>
    case PATH.IMPLEMENTOR_EXCHANGE: return <OrderCard {...task} navigateTo={`/implementer/${task.id}`} />
    case PATH.ORDERS_OF_CLIENT:
      switch (status) {
        case TASK_STATUS.DONE: return <OrderCard {...task} showStatus client={null} implementor={task.client} showCheckOrderLink/>
        case TASK_STATUS.IN_PROGRESS: return <OrderCard {...task} showStatus client={null} implementor={task.client}/>
        case TASK_STATUS.CREATED: return <OrderCard {...task} showStatus showWatchResponsesLink showGarbage client={null}/>
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