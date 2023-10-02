import OrderCard from './OrderCard/OrderCard';

const OrderList = ({data}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridColumnGap: '15px',
      gridRowGap: '15px',
    }}
    >
      {
        data.map((task, id) => (
          <OrderCard data={task} key={id + task.title}/>
        ))
      }
    </div>
  );
};

export default OrderList;