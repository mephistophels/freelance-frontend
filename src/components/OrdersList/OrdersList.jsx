import OrderCard from './OrderCard/OrderCard';

function typedOrderCard(type, task){
  const { status } = task;
  switch (type) {
    case '/implementer/todo': return <OrderCard {...task} navigateTo={`/implementer/finish/${task.id}`} />
    case '/implementer/available': return <OrderCard {...task} navigateTo={`/implementer/available/${task.id}`} />
    case '/client/orders/my':
      if (status === 'done')
        return <OrderCard {...task} navigateTo={`/client/finish/${task.id}`} />
      return <OrderCard {...task} navigateTo={''} />
  }
}
const OrderList = ({tasks, type}) => {

  return (
    <div>
      {
        tasks.map((task) => (
          <typedOrderCard type={type} task={task}/>
        ))
      }
    </div>
  );
};

export default OrderList;