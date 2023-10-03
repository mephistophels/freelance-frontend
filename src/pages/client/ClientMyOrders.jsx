import {Button, Group} from '@mantine/core';
import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import {InputWithButton} from '../../components/Search/Search';
import {Link, useNavigate} from 'react-router-dom';
import {PATH, TASK_STATUS} from "../../consts";


const tasks = [
    {
        id: 324,
        title: 'Создание сайта',
        description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
        cost: 20000,
        client: {
            name: 'Марина',
            rating: '4.8'
        },
        status: TASK_STATUS.CREATED
    },
    {
        id: 321,
        title: 'Создание логотипа',
        description: 'Требуется разработать уникальный и креативный логотип для стартапа в области IT.',
        cost: 5000,
        client: {
            name: 'Василий',
            rating: '4.7'
        },
        status: TASK_STATUS.IN_PROGRESS
    },
    {
        id: 323,
        title: 'Перевод текста',
        description: 'Нужно перевести технический текст объемом 10000 слов с английского на русский. Требуется знание технической терминологии.',
        cost: 12000,
        client: {
            name: 'Алексей',
            rating: '4.5'
        },
        status: TASK_STATUS.DONE,
    },
    {
        id: 322,
        title: 'Разработка мобильного приложения',
        description: 'Ищем разработчика для создания мобильного приложения на iOS и Android. Приложение должно быть простым в использовании и иметь современный дизайн.',
        cost: 30000,
        client: {
            name: 'Екатерина',
            rating: '4.9'
        },
        status: TASK_STATUS.CREATED
    },
];


const ClientMyOrders = () => {
    return (
        <div>
            <br />
            <Group justify="space-between" wrap='nowrap'>
                <InputWithButton style={{width:'100%'}}/>
                <Link to={PATH.CLIENT_CREATE_ORDER}>
                    <Button>Создать заказ</Button>
                </Link>
            </Group>
            <br/>
            <OrderList tasks={tasks} type={PATH.ORDERS_OF_CLIENT}/>
            <br/>
            <Pagination/>
        </div>
);
};

export default ClientMyOrders;