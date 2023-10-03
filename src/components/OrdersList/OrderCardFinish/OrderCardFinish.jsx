import {Card, Text, Badge, Group, Button, Title, Avatar} from '@mantine/core';
import {useNavigate} from 'react-router-dom';
import {Coin} from "../../../res/icons/coin";
import classes from '../OrderCard/OrderCard.module.css';


export default function OrderCardFinish({id, title, description, cost, creator}) {
    const navigate = useNavigate();
    return (
        <div className={classes.ordercardwrapper} onClick={() => navigate(`/implementer/finish/${id}`)}>

            <Card withBorder padding="lg" radius="md">
                <Group justify="space-between" mb={10}>
                    <div>
                        <Title order={3}>{title}</Title>
                        <Text size="sm" style={{maxWidth: 700}}>{description}</Text>
                    </div>
                    <Group position='apart' gap={5}>
                        <Title order={4} style={{color: '#409C93'}}>{cost}</Title><Coin color='#409C93'/>
                    </Group>
                </Group>
                <Group position='apart' gap={5} align='stretch'>
                    <Avatar mr={10} size='xl' radius='sm' src='https://i.pravatar.cc/300?img=3' />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <Text size='xs'>Заказчик</Text>
                            <Text size='xl' mt={-8} fw={500} weight='md'>{creator.name}</Text>
                        </div>
                        <Badge color='teal' variant='light'>{creator.rating}</Badge>
                    </div>
                </Group>
            </Card>
        </div>
    );
}