import {Card, Text, Badge, Group, Button, Title, Avatar} from '@mantine/core';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Coin} from "../../../res/icons/coin";
import classes from './OrderCard.module.css';
import {PATH, TASK_STATUS} from "../../../consts";
import {UserCard} from "../../UserCard";
import {StarReview} from "../../StarsReview";
import { api } from '../../../api';
import {postLeaveReview} from "../../../api/actions/balance";

const statusColor = {
    [TASK_STATUS.ACCEPTED]: 'gray',
    [TASK_STATUS.DONE]: 'green',
    [TASK_STATUS.IN_PROGRESS]: 'yellow',
    [TASK_STATUS.CREATED]: 'blue'
    
}

const dataCustemer = {
    id: 1,
    createdAt: [
        2023,
        10,
        1,
        19,
        37,
        37,
        350867000
    ],
    email: "exampleexample.com",
    surname: "Ivanov",
    name: "Ivan",
    patronymic: "Ivanovich",
    birthday: [
        1990,
        1,
        1
    ],
    mark: {
        mark: 0.0
    }
};

// const dataTask = {
//     id,
//     createdAt,
//     title,
//     content,
//     price,
//     status,
//     customer,
//     executor,
// }

const deleteOrder = id => {
    api.order.deleteOrder(id)
    .then(() => window.location.reload())
}

export default function OrderCard({
                                    id,
                                    createdAt,
                                    title,
                                    content,
                                    price,
                                    status,
                                    customer,
                                    executor,

                                    navigateTo = '',
                                    showGarbage,
                                    showStatus,
                                    showWatchResponsesLink,
                                    showCheckOrderLink,
                                    showShadow = true,
                                    sign='',
                                    leaveReview,
    hideExecutor,
    hideCustomer
                                  }) {
    price = price || 0;
    const location = useLocation()
    const isImplementer = location.pathname.includes('implementer')


    const rate = rate => {
        const data = {
            mark: rate,
            customerId: customer.id,
            executorId: executor.id,
            orderId: id,
            message: '',
            recipient: isImplementer? 'CUSTOMER' : 'EXECUTOR'
        }
        console.log(data)
        postLeaveReview(data)
    }
    return (
        <div className={classes.order_card_wrapper + ' ' + (showShadow && classes.order_card_wrapper_hv)}>

            <Card withBorder padding="lg" radius="md">
                <Group justify="space-between" mb={10}>
                    <div>
                        <Group mb={10}>
                            <Link to={navigateTo}>
                                <Text size='xl' fw={700} className={classes.header_link}
                                       style={{textDecoration: navigateTo ? 'underline' : 'none'}}>{title}</Text>
                            </Link>

                            {showGarbage && <Text c='red.9' mb={-3} onClick={() => deleteOrder(id)} className={classes.header_link}>Отменить заказ</Text>}
                            {showStatus && <Badge color={statusColor[status]} variant='light'>{status}</Badge>}
                            {leaveReview && <StarReview onRate={rate}/> }
                        </Group>
                        <Text mb={10} style={{maxWidth: 700}}>{content}</Text>
                    </div>

                    <Group position='apart' gap={5}>
                        <Title order={4} style={{color: '#409C93'}}>{sign + price}</Title><Coin color='#409C93'/>
                    </Group>
                </Group>
                <Group position='apart' gap={20} align='stretch'>
                    {!hideExecutor && executor && <UserCard user={executor} isImplementor/>}
                    {!hideCustomer && customer && <UserCard user={customer}/>}
                </Group>
                {showWatchResponsesLink &&
                <>
                    <br />
                    <Link to={PATH.CLIENT_RESPONSES + id}>
                        <Button variant='outline' mb={-3}>
                            Просмотреть заявки
                        </Button>
                    </Link>
                </>
                }
                
                {showCheckOrderLink &&
                    <Link to={PATH.CLIENT_CLOSE_ORDER_ID + id}>
                        <Button variant='outline' mb={-3} mt={20}>
                            Проверить выполнение заказа
                        </Button>
                    </Link>
                }
            </Card>
        </div>
    );
}