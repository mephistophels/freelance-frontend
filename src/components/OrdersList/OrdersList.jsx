import OrderCard from './OrderCard/OrderCard';

function TypedOrderCard({type, task}){
  const { status } = task;
  console.log(task)
  switch (type) {
    case '/implementer/todo': return <OrderCard {...task} navigateTo={`/implementer/finish/${task.id}`} />
    case '/implementer/available': return <OrderCard {...task} navigateTo={`/implementer/${task.id}`} />
    case '/client/orders/my':
      switch (status) {
        case 'done': return <OrderCard {...task} navigateTo={`/client/finish/${task.id}`} showStatus={true}/>
        case 'in progress': return <OrderCard {...task} navigateTo={`/client/finish/${task.id}`} showStatus={true}/>
        case 'created': return <OrderCard {...task} navigateTo={`/client/finish/${task.id}`} 
          showStatus={true} 
          showApplicationLink={true}
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