import { Pagination as PG } from '@mantine/core'

const Pagination = ({
  total,
  page,
  onChange
}) => {
  return (
    <div style={{display: 'grid', justifyContent: 'center'}}>
      <PG total={total} value={page} onChange={e => onChange(e)}/>
    </div>
  );
};

export default Pagination;