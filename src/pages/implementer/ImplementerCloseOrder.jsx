import {Avatar, Badge, Button, Card, Group, Text, Textarea, TextInput, Title} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import { Coin } from "../../res/icons/coin";
import classes from './Implementer.module.css';
import { useState } from "react";
import {PATH} from "../../consts";
import OrderCard from "../../components/OrdersList/OrderCard/OrderCard";
import {BackLink} from '../../components/BackLink';


const data = {
    id: 324,
    title: 'Создание сайта',
    description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
    cost: 20000,
    client: {
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
        client,
    } = data;

    return (
        <> 
            <BackLink />
            <br />
            <Title order={1} mb={25}>Закончить выполнение</Title>
            <Title order={2} mb={25}>Описание проекта</Title>
            <OrderCard {...data} showShadow={false}/>
            <Title order={2} mb={25} mt={50}>Отправить решение</Title>
            <Card withBorder padding="xl" radius="md">
                <Text mb={10}>
                    Опишите свое решение здесь.
                    Не забудьте прикрепить ссылки на необходимые ресурсы.
                    Помните, что от качества решения, зависит ваш рейтинг, как исполнителя.
                </Text>
                <Textarea
                    size='md'
                    placeholder="Ваше решение здесь"
                    value={sendMessage}
                    onChange={e => setMessage(e.target.value)}
                    minRows={10}
                    autosize
                    mb={20}
                />
                <Group>
                    <Button>Сдать заказ на проверку</Button>
                    <Text>
                        Баланс пополнится, как только заказчик закроет задание
                    </Text>
                </Group>
            </Card>
        </>
    );
};

export default ImplementerCloseOrder;