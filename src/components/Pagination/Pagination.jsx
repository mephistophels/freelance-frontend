import { Pagination as PG } from '@mantine/core'

const Pagination = () => {
  return (
    <div style={{display: 'grid', justifyContent: 'center'}}>
      <PG total={10}/>
    </div>
  );
};

export default Pagination;