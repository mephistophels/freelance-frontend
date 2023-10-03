import {Avatar, Badge, Button, Card, Group, Text, TextInput, Title} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import { Coin } from "../../res/icons/coin";
import classes from './Implementer.module.css';
import { useState } from "react";
import {PATH} from "../../consts";


const data = {
    id: 324,
    title: 'Создание сайта',
    description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
    cost: 20000,
    creator: {
      name: 'Марина',
      rating: '4.8'
    }
};

const ImplementerCloseOrder = () => {

    const [sendMessage, setMessage] = useState('');

    // const {id} = useParams();
    const {
        id,
        title,
        description,
        cost,
        creator,
    } = data;

    return (
        <div>
            <Link to={PATH.ORDERS_OF_IMPLEMENTOR}><Text size="sm" style={{fontWeight: 800}} color="#5F5A5A">{"< К списку проектов"}</Text></Link>
            <br /><br />
            {/* <h1 className={classes.titletext}>
                Сдать решение
            </h1> */}
            <Card withBorder padding="xl" radius="md">
                <Group justify="space-between" mb={10}>
                    <div className="mb-5">
                        <Title order={2}>{title}</Title>
                        <br />
                        <Text size="lg" style={{maxWidth: 700}}>{description}</Text>
                    </div>
                    <Group position='apart' gap={5}>
                        <Title order={4} style={{color: '#409C93'}}>{cost}</Title><Coin color='#409C93'/>
                    </Group>
                </Group>
                <Group position='apart' gap={5} align='stretch'>
                    <Avatar className={classes.avatar} mr={10} size='xl' radius='sm' src='https://i.pravatar.cc/300?img=3' />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <Text size='xs'>Заказчик</Text>
                            <Text size='xl' mt={-8} fw={500} weight='md'>{creator.name}</Text>
                        </div>
                        <Badge color='teal' variant='light'>{creator.rating}</Badge>
                    </div>
                </Group>
            </Card>
            <br /><br />
            <h1 className={classes.titletext}>
                Сдать решение
            </h1>
            <Card withBorder padding="xl" radius="md">
                {/* <Form.Control as="textarea" rows={3} style={{
                    fontSize: '15px',
                    fontWeight: '500',
                    minHeight: '300px',
                    padding: '20px',
                    borderRadius: '10px',
                }}/> */}
                <textarea
                    className={classes.areainput}
                    placeholder="Опишите свое решение здесь
Не забудьте прикрепить ссылки на необходимые ресурсы
Помните, что от качества решения, зависит ваш рейтинг, как исполнителя
                    "
                    value={sendMessage}
                    onChange={e => setMessage(e.target.value)}
                />
                <div style={{marginTop: '20px', display: 'grid'}}>
                    <div style={{
                        marginRight: '0', 
                        marginLeft: 'auto',
                    }}>
                    <Text style={{display: 'inline-block', marginRight: '30px'}}>
                        Баланс пополнится, как только заказчик закроет задание
                    </Text>
                    <Button color="#397E79" style={{ 
                        width: '200px', 
                        display: 'inline-block'
                    }}>Отправить</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ImplementerCloseOrder;