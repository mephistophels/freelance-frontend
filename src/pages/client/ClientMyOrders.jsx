import {Button, Group} from '@mantine/core';
import OrderList from '../../components/OrdersList/OrdersList';
import Pagination from '../../components/Pagination/Pagination';
import {InputWithButton} from '../../components/Search/Search';
import {Link, useNavigate} from 'react-router-dom';
import {PATH} from "../../consts";


const tasks = [
    {
        id: 324,
        title: 'Создание сайта',
        description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
        cost: 20000,
        creator: {
            name: 'Марина',
            rating: '4.8'
        },
        status: 'created'
    },
    {
        id: 321,
        title: 'Создание логотипа',
        description: 'Требуется разработать уникальный и креативный логотип для стартапа в области IT.',
        cost: 5000,
        creator: {
            name: 'Василий',
            rating: '4.7'
        },
        status: 'in progress'
    },
    {
        id: 323,
        title: 'Перевод текста',
        description: 'Нужно перевести технический текст объемом 10000 слов с английского на русский. Требуется знание технической терминологии.',
        cost: 12000,
        creator: {
            name: 'Алексей',
            rating: '4.5'
        },
        status: 'done',
    },
    {
        id: 322,
        title: 'Разработка мобильного приложения',
        description: 'Ищем разработчика для создания мобильного приложения на iOS и Android. Приложение должно быть простым в использовании и иметь современный дизайн.',
        cost: 30000,
        creator: {
            name: 'Екатерина',
            rating: '4.9'
        },
        status: 'created'
    },
];


const ClientMyOrders = () => {
    return (
        <div>
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