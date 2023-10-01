import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';


const tasks = [
  {
    id: 321,
    title: 'lorepsum',
    description: 'loremumrjkfnwerfwpkrfhwergfhwbnerfpjkvnwpejkfnpkjwerfn',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'loremumrjkfnwerfwpkrfhwergfhwbnerfpjkvnwpejkfnpkjwerfn',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'loremumrjkfnwerfwpkrfhwergfhwbnerfpjkvnwpejkfnpkjwerfn',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'edf',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'loremumrjkfnwerfwpkrfhwergfhwbnerfpjkvnwpejkfnpkjwerfn',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'edf',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'loremumrjkfnwerfwpkrfhwergfhwbnerfpjkvnwpejkfnpkjwerfn',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'edf',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
  {
    id: 321,
    title: 'lorepsum',
    description: 'loremumrjkfnwerfwpkrfhwergfhwbnerfpjkvnwpejkfnpkjwerfn',
    cost: 23123,
    creator: {
      name: 'vasya',
      rating: '123'
    }
  },
];


const Implementer = () => {
  return (
    <div>
      <Search />
      <br/>
      <OrderList data={tasks}/>
      <br />
      <Pagination />
    </div>
  );
};

export default Implementer;