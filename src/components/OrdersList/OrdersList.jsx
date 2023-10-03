import OrderCard from './OrderCard/OrderCard';

function TypedOrderCard({type, task}){
  const { status } = task;
  console.log(task)
  switch (type) {
    case '/implementer/todo': return <OrderCard {...task} navigateTo={`/implementer/finish/${task.id}`} />
    case '/implementer/available': return <OrderCard {...task} navigateTo={`/implementer/${task.id}`} />
    case '/client/orders/my':
      if (status === 'done')
        return <OrderCard {...task} navigateTo={`/client/finish/${task.id}`} showStatus={true}/>
      return <OrderCard {...task} navigateTo={''} showStatus={true}/>
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