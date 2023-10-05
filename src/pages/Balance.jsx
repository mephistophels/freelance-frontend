import {Button, Card, Group, Input, Modal, Space, Text, Title} from "@mantine/core";
import OrderCard from "../components/OrdersList/OrderCard/OrderCard";
import {BALANCE_EVENT, TASK_STATUS} from "../consts";
import {Coin} from "../res/icons/coin";
import {useDisclosure} from "@mantine/hooks";
import { api } from "../api";
import {useEffect, useState} from "react";
import {useQuery} from "../hooks";
import {axiosInstance} from "../api/instance";
import { useDispatch } from "react-redux";
import { updateBalance } from "../store/slices/balance";


const SimpleBalanceEvent = ({
                                text,
                                cost,
                            }) => (
    <Card withBorder mb={15}>
        <Group justify='space-between'>
            <Text size="xl" fw={700}>{text}</Text>
            <Group position='apart' gap={5} mr={10}>
                <Title order={4} style={{color: '#409C93'}}>{cost}</Title><Coin color='#409C93'/>
            </Group>
        </Group>
    </Card>
)



const Balance = () => {
    const dispatch = useDispatch();
    const [inputValue, setInput] = useState('');
    const [openedSub, {open: openSub, close: closeSub}] = useDisclosure();
    const [openedAdd, {open: openAdd, close: closeAdd}] = useDisclosure();
    const [balanceList, fetchBalanceList] = useQuery(api.balance.getBalanceList)
    const [balance, fetchBalance] = useQuery(api.balance.getMyBalance)
    const [user] = useQuery(() => axiosInstance.get('/user/me').then(res => res.data))
    const BalanceCard = ({order, price}) => {
        if(order && order.executor.id === user.id && price < 0 || order && order.customer.id === user.id && price > 0) return <></>
        if(order && price >= 0) return <OrderCard {...order} showShadow={false} showStatus={true} sign={'+'} leaveReview={true}/>
        if(order && price < 0) return <OrderCard {...order} showShadow={false} showStatus={true} sign={'-'} leaveReview={true}/>
        if(price > 0)return <SimpleBalanceEvent text={'Пополнение баланса'} cost={`+${price}`}/>
        if(price < 0)return <SimpleBalanceEvent text={'Вывод средств'} cost={`${price}`}/>
    };
    const addBalance = async () => {
        await api.balance.postReplenish({
            price: inputValue,
        });
        fetchBalance()
        fetchBalanceList()
        setInput('');
        closeAdd();
        dispatch(updateBalance(await api.balance.getMyBalance().then(data => data.amount)));
    }
    const subBalance = async () => {
        await api.balance.postWithdraw({
            price: inputValue,
        });
        fetchBalance()
        fetchBalanceList()
        setInput('');
        closeSub();
        dispatch(updateBalance(await api.balance.getMyBalance().then(data => data.amount)));
    }
    useEffect(() => {
        console.log(user)
    }, [user]);
    return (
        <>
            <Modal opened={openedSub} onClose={closeSub} title="Вывод средств" centered>
                <Input leftSection={<Coin/>} placeholder="Введите сумму" size='lg' type='number' value={inputValue} onChange={e => setInput(e.target.value)}/>
                <Space h='lg'/>
                <Button onClick={subBalance}>Вывести</Button>
            </Modal>
            <Modal opened={openedAdd} onClose={closeAdd} title="Пополнение баланса" centered>
                <Input leftSection={<Coin/>} placeholder="Введите сумму" size='lg' type='number' value={inputValue} onChange={e => setInput(e.target.value)}/>
                <Space h='lg'/>
                <Button onClick={addBalance}>Пополнить</Button>
            </Modal>
            <Group justify="space-between">
                {balance && <Title order={3}>Баланс {balance.amount || 0}</Title>}
                <Group mb={35} mt={35} justify="right">
                    <Button onClick={openAdd}>Пополнить</Button>
                    <Button onClick={openSub}>Вывести</Button>
                </Group>
            </Group>

            {user&&balanceList&&
                balanceList.content.map(event => <div key={event.id}><BalanceCard {...event} myId={user}/></div>)
            }
        </>
    )
}

export default Balance;