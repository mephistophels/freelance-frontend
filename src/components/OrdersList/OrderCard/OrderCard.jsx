import {Card, Text, Badge, Group, Button, Title, Avatar} from '@mantine/core';
import {Link, useNavigate} from 'react-router-dom';
import {Coin} from "../../../res/icons/coin";
import classes from './OrderCard.module.css';
import {PATH, TASK_STATUS} from "../../../consts";
import {UserCard} from "../../UserCard";

const statusColor = {
    [TASK_STATUS.ACCEPTED]: 'gray',
    [TASK_STATUS.DONE]: 'green',
    [TASK_STATUS.IN_PROGRESS]: 'yellow',
    [TASK_STATUS.CREATED]: 'blue'
}

export default function OrderCard({
                                      id,
                                      title,
                                      description,
                                      cost,
                                      client,
                                      implementor,
                                      status,
                                      navigateTo = '',
                                      showGarbage,
                                      showStatus,
                                      showWatchResponsesLink,
                                      showCheckOrderLink,
                                      showShadow = true,
                                      sign,
                                  }) {
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

                            {showGarbage && <Text c='red.9' mb={-3} onClick={() => console.log('delete')}
                                                  className={classes.header_link}>Отменить заказ</Text>}
                            {showStatus && <Badge color={statusColor[status]} variant='light'>{status}</Badge>}
                        </Group>
                        <Text mb={10} style={{maxWidth: 700}}>{description}</Text>
                    </div>

                    <Group position='apart' gap={5}>
                        <Title order={4} style={{color: '#409C93'}}>{(sign ? sign : 0) + cost}</Title><Coin color='#409C93'/>
                    </Group>
                </Group>
                <Group position='apart' gap={20} align='stretch'>
                    {client && <UserCard user={client}/>}
                    {implementor && <UserCard user={implementor} isImplementor/>}
                </Group>
                {showWatchResponsesLink &&
                    <Link to={PATH.CLIENT_RESPONSES + id}>
                        <Button variant='outline' mb={-3}>
                            Просмотреть заявки ({Math.floor(Math.random() * 10)})
                        </Button>
                    </Link>
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