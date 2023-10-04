import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import Search, {InputWithButton} from '../../components/Search/Search';
import {PATH, TASK_STATUS} from "../../consts";


const tasks = [
  {
    id: 322,
    title: 'Разработка мобильного приложения',
    description: 'Ищем разработчика для создания мобильного приложения на iOS и Android. Приложение должно быть простым в использовании и иметь современный дизайн.',
    cost: 30000,
    status: TASK_STATUS.IN_PROGRESS,
    client: {
      name: 'Екатерина',
      rating: '4.9',
      id: '123'
    }
  },
  {
    id: 323,
    title: 'Перевод текста',
    description: 'Нужно перевести технический текст объемом 10000 слов с английского на русский. Требуется знание технической терминологии.',
    cost: 12000,
    status: TASK_STATUS.IN_PROGRESS,
    client: {
      name: 'Алексей',
      rating: '4.5',
      id: '123'
    }
  },
  {
  id: 321,
    title: 'Создание логотипа',
    description: 'Требуется разработать уникальный и креативный логотип для стартапа в области IT.',
    cost: 5000,
    status: TASK_STATUS.IN_PROGRESS,
    client: {
      name: 'Василий',
      rating: '4.7',
      id: '123'
    }
  },
];

const ImplementerTodo = () => {
  return (
    <div>
      <br />
      <InputWithButton/>
      <br/>
      <OrderList tasks={tasks} type={PATH.ORDERS_OF_IMPLEMENTOR}/>
      <br />
      <Pagination />
    </div>
  );
};

export default ImplementerTodo;