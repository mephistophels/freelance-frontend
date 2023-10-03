import {Card, Text, Badge, Group, Button, Title, Avatar} from '@mantine/core';
import {Link, useNavigate} from 'react-router-dom';
import {Coin} from "../../../res/icons/coin";
import classes from './OrderCard.module.css';
import {PATH} from "../../../consts";
import {UserCard} from "../../UserCard";

const statusColor = {
    'accepted': 'gray',
    'done': 'green',
    'in progress': 'yellow',
    'created': 'blue'
}

export default function OrderCard({
                                      id,
                                      title,
                                      description,
                                      cost,
                                      creator,
                                      status,
                                      navigateTo = '',
                                      showGarbage,
                                      showStatus,
                                      showWatchResponsesLink,
                                  }) {
    return (
        <div className={classes.order_card_wrapper}>

            <Card withBorder padding="lg" radius="md">
                <Group justify="space-between" mb={10}>
                    <div>
                        <Group mb={10}>
                            <Link to={navigateTo}>
                                <Title order={4} className={classes.header_link} style={{textDecoration: navigateTo ? 'underline' : 'none'}}>{title}</Title>
                            </Link>
                            {showWatchResponsesLink &&
                                <Link to={PATH.CLIENT_REDACT_ORDER_ID + id}>
                                    <Text c='teal.6' className={classes.header_link} mb={-3}>
                                        Просмотреть заявки ({Math.floor(Math.random() * 10)})
                                    </Text>
                                </Link>
                            }
                            {showGarbage && <Text c='red' mb={-3} onClick={() => console.log('delete')}
                                                  className={classes.header_link}>Отменить заказ</Text>}
                            {showStatus && <Badge color={statusColor[status]} variant='light'>{status}</Badge>}
                        </Group>
                        <Text mb={10} size="sm" style={{maxWidth: 700}}>{description}</Text>
                    </div>

                    <Group position='apart' gap={5}>
                        <Title order={4} style={{color: '#409C93'}}>{cost}</Title><Coin color='#409C93'/>
                    </Group>
                </Group>
                <UserCard user={creator}/>
            </Card>
        </div>
    );
}