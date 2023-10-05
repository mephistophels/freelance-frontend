import {Avatar, Badge, Button, Card, Group, Text, Textarea, TextInput, Title} from "@mantine/core";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import OrderCard from "../../components/OrdersList/OrderCard/OrderCard";
import { BackLink } from "../../components/BackLink";
import { api } from "../../api";
import {useQuery} from "../../hooks";


const ImplementerOrderRespond = () => {

    const [sendMessage, setMessage] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    const [order] = useQuery(api.order.getOrderById, id)


    const sendRespond = () => {
        api.order.postSendRespond(id, {
            content: sendMessage
        }).then(navigate(-1))
    }

    return (
        <>
            <BackLink />
            <br />
            <Title order={1} mb={25}>Подать заявку на исполнение</Title>
            <Title order={2} mb={25}>Описание проекта</Title>
            <OrderCard {...order} showShadow={false}/>
            <Title order={2} mb={25} mt={50}>Отправить заявку</Title>
            <Card withBorder padding="xl" radius="md">
                <Text mb={10}>
                    1. Опишите свой релевантный опыт. Расскажите про 1-3 ваших кейса по решению подобных задач.<br/>
                    2. Укажите, как именно вы собираетесь выполнять это задание. Опишите ключевые моменты.<br/>
                    3. Составляйте уникальные отклики, которые покажут вашу компетентность и заинтересованность в
                    проекте. Не используйте шаблонные тексты
                </Text>
                <Textarea
                    size='md'
                    placeholder="Опишите как будете решать задачу"
                    value={sendMessage}
                    onChange={e => setMessage(e.target.value)}
                    minRows={10}
                    autosize
                    mb={20}
                />
                <Group>
                    <Button onClick={sendRespond}>Отправить заявку</Button>
                    <Text>
                        Заказчик рассмотрит ваше предложение и свяжется с вами
                    </Text>
                </Group>
            </Card>
        </>
    );
};

export default ImplementerOrderRespond;