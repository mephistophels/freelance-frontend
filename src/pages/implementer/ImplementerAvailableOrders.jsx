import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import Search, {InputWithButton} from '../../components/Search/Search';
import {PATH, TASK_STATUS} from "../../consts";


const tasks = [
  {
    id: 321,
    title: 'Создание логотипа',
    description: 'Требуется разработать уникальный и креативный логотип для стартапа в области IT.',
    cost: 5000,
    status: TASK_STATUS.CREATED,
    client: {
      name: 'Василий',
      rating: '4.7'
    }
  },
  {
    id: 322,
    title: 'Разработка мобильного приложения',
    description: 'Ищем разработчика для создания мобильного приложения на iOS и Android. Приложение должно быть простым в использовании и иметь современный дизайн.',
    cost: 30000,
    status: TASK_STATUS.CREATED,
    client: {
      name: 'Екатерина',
      rating: '4.9'
    }
  },
  {
    id: 323,
    title: 'Перевод текста',
    description: 'Нужно перевести технический текст объемом 10000 слов с английского на русский. Требуется знание технической терминологии.',
    cost: 12000,
    status: TASK_STATUS.CREATED,
    client: {
      name: 'Алексей',
      rating: '4.5'
    }
  },
  {
    id: 324,
    title: 'Создание сайта',
    description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
    cost: 20000,
    status: TASK_STATUS.CREATED,
    client: {
      name: 'Марина',
      rating: '4.8'
    }
  }
];


const ImplementerAvailableOrders = () => {
  return (
    <div>
      <br />
      <InputWithButton />
      <br/>
      <OrderList tasks={tasks} type={PATH.IMPLEMENTOR_EXCHANGE}/>
      <br />
      <Pagination />
    </div>
  );
};

export default ImplementerAvailableOrders;