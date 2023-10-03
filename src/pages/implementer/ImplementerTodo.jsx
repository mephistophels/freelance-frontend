import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';


const tasks = [
  {
    id: 322,
    title: 'Разработка мобильного приложения',
    description: 'Ищем разработчика для создания мобильного приложения на iOS и Android. Приложение должно быть простым в использовании и иметь современный дизайн.',
    cost: 30000,
    status: 'in progress',
    creator: {
      name: 'Екатерина',
      rating: '4.9'
    }
  },
  {
    id: 323,
    title: 'Перевод текста',
    description: 'Нужно перевести технический текст объемом 10000 слов с английского на русский. Требуется знание технической терминологии.',
    cost: 12000,
    status: 'in progress',
    creator: {
      name: 'Алексей',
      rating: '4.5'
    }
  },
  {
  id: 321,
    title: 'Создание логотипа',
    description: 'Требуется разработать уникальный и креативный логотип для стартапа в области IT.',
    cost: 5000,
    status: 'in progress',
    creator: {
      name: 'Василий',
      rating: '4.7'
    }
  },
];

const ImplementerTodo = () => {
  return (
    <div>
      <Search />
      <br/>
      <OrderList tasks={tasks} type={'/implementer/todo'}/>
      <br />
      <Pagination />
    </div>
  );
};

export default ImplementerTodo;