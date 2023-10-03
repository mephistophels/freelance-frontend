import OrderCard from './OrderCard/OrderCard';
import {PATH} from "../../consts";

function TypedOrderCard({type, task}){
  const { status } = task;
  console.log(task)
  switch (type) {
    case PATH.ORDERS_OF_IMPLEMENTOR: return <OrderCard {...task} navigateTo={`PATH.IMPLEMENTOR_PRESENTATION_ORDER_ID/${task.id}`} />
    case PATH.IMPLEMENTOR_EXCHANGE: return <OrderCard {...task} navigateTo={`/implementer/${task.id}`} />
    case '/client/orders/my':
      switch (status) {
        case 'done': return <OrderCard {...task} navigateTo={`${PATH.ORDERS_OF_IMPLEMENTOR}${task.id}`} showStatus={true}/>
        case 'in progress': return <OrderCard {...task} navigateTo={`${PATH.ORDERS_OF_IMPLEMENTOR}${task.id}`} showStatus={true}/>
        case 'created': return <OrderCard {...task} navigateTo={`${PATH.ORDERS_OF_IMPLEMENTOR}${task.id}`}
          showStatus={true} 
          showRedactMyOrderLink={true}
          applicationLinkTo={`/client/order/${task.id}/application`}
        />
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