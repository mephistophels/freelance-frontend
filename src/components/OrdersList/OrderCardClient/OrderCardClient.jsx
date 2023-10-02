import {Card, Text, Badge, Group, Button, Title, Avatar} from '@mantine/core';
import {useNavigate} from 'react-router-dom';
import {Coin} from "../../../res/icons/coin";
import classes from '../OrderCard/OrderCard.module.css';
import {ReactComponent as Garbage} from '../../../res/icons/garbage.svg';

const TaskStatus = {
    'created': 'ждет заявок',
    'in progress': 'в процессе',
}

const TaskStatusColor = {
    'created': '#9BCDFF',
    'in progress': '#51CA79',
}

export default function OrderCardClient({id, title, description, cost, creator, status}) {
    return (
        <div className={classes.ordercardwrapper}>

            <Card withBorder padding="lg" radius="md">
                <Group justify="space-between" mb={10}>
                    <div>
                        <Title style={{display: 'inline-block'}} order={3}>{title}</Title>

                        {/* //! task status */}
                        <Title style={{display: 'inline-block', marginLeft: '20px', color: TaskStatusColor[status]}} order={3}>
                            {TaskStatus[status]}
                        </Title>


                        <Text size="sm" style={{maxWidth: 700}}>{description}</Text>
                    </div>
                    <Group position='apart' gap={5}>
                        <Title order={4} style={{color: '#409C93'}}>{cost}</Title><Coin color='#409C93'/>
                    </Group>
                </Group>

                <div style={{display: 'grid'}}>
                <Group position='apart' gap={5} align='stretch' style={{maxWidth: '300px', marginLeft: '0', marginRight: 'auto'}}>
                    <Avatar mr={10} size='xl' radius='sm' src='https://i.pravatar.cc/300?img=3' />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <Text size='xs'>Заказчик</Text>
                            <Text size='xl' mt={-8} fw={500} weight='md'>{creator.name}</Text>
                        </div>
                        <Badge color='teal' variant='light'>{creator.rating}</Badge>
                    </div>
                </Group>
                <Garbage 
                    style={{width: '50px', marginLeft: 'auto', marginRight: '0', marginTop: '-50px'}}
                />
                </div>
            </Card>
        </div>
    );
}