import OrderCard from './OrderCard/OrderCard';

const OrderList = ({tasks}) => {
  return (
    <div>
      {
        tasks.map((task) => (
          <OrderCard {...task} key={task.id}/>
        ))
      }
    </div>
  );
};

export default OrderList;