import OrderCard from './OrderCard/OrderCard';

const OrderList = ({data}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '33.3% 33.3% 33.3%',
      gridColumnGap: '15px',
      gridRowGap: '15px',

    }}>
      {
        data.map((task, id) => (
          <OrderCard data={task} key={id + task.title}/>
        ))
      }
    </div>
  );
};

export default OrderList;