import {Button, Input, InputLabel, Textarea, Title} from "@mantine/core";
import {Coin} from "../../res/icons/coin";
import {useForm} from "../../hooks";
import {Link} from "react-router-dom";
import {PATH} from "../../consts";
import {BackLink} from "../../components/BackLink";
import { api } from '../../api';


const ClientCreateOrder = () => {
    const {values, title, content, price} = useForm({
        title: '',
        content: '',
        price: '1000',
    })
    function createOrder() {
        api.order.postCreateOrder(values)
        .then(() => window.location.replace(PATH.ORDERS_OF_CLIENT))
    }
    return (
        <>
            <BackLink/>
            <br />
            <Title>Создание заказа</Title>
            <br/>
            <InputLabel size="md" c="#C1C2C5">Заголовок</InputLabel>
            <Input placeholder="Разработка дизайна для сайта" {...title} size='xl'/>
            <br/>
            <InputLabel size="md" c="#C1C2C5">Описание. Постарайтесь подробно описать цели и задачи проекта, обозначьте сроки выполнения работы и требования к исполнителю</InputLabel>
            <Textarea
                {...content}
                size='md'
                placeholder="Описание проекта здесь"
                minRows={10}
                autosize
            />
            <br/>
            <InputLabel size="md" c="#C1C2C5">Цена за выполнение</InputLabel>
            <Input {...price} leftSection={<Coin/>} placeholder="Введите сумму" size='lg' type='number'/>
            <br/>
            {/* <Link to={PATH.ORDERS_OF_CLIENT}> */}
                <Button onClick={createOrder}>Создать заказ</Button>
            {/* </Link> */}
        </>
    );
};

export default ClientCreateOrder;