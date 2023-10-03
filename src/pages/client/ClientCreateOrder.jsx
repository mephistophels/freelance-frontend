import {Button, Input, Textarea, Title} from "@mantine/core";
import {Coin} from "../../res/icons/coin";
import useForm from "../../hooks";
import {Link} from "react-router-dom";
import {PATH} from "../../consts";
import {BackLink} from "../../components/BackLink";


const ClientCreateOrder = () => {
    const {values, title, description, cost} = useForm({
        title: '',
        description: '',
        cost: '1000',
    })
    function createOrder() {
        console.log(values)

    }
    return (
        <>
            <BackLink/>
            <Title>Создание заказа</Title>
            <br/>
            <Input {...title} size='xl'/>
            <br/>
            <Textarea
                {...description}
                size='md'
                placeholder="Опишите как будете решать задачу"
                minRows={10}
                autosize
            />
            <br/>
            <Input {...cost} size='xl' leftSection={<Coin/>}/>
            <br/>
            <Link to={PATH.ORDERS_OF_CLIENT}>
                <Button onClick={createOrder}>Создать заказ</Button>
            </Link>
        </>
    );
};

export default ClientCreateOrder;