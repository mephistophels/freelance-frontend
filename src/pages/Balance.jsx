import {Button, Card, Group, Input, Modal, Space, Text, Title} from "@mantine/core";
import OrderCard from "../components/OrdersList/OrderCard/OrderCard";
import {BALANCE_EVENT, TASK_STATUS} from "../consts";
import {Coin} from "../res/icons/coin";
import {useDisclosure} from "@mantine/hooks";
import { api } from "../api";
import { useState } from "react";
import {useQuery} from "../hooks";


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

const BalanceCard = ({id, order, price}) => {
    if(order) return <OrderCard {...order} showShadow={false} showStatus={true} sign={'+'} leaveReview={true}/>
    if(order) return <OrderCard {...order} showShadow={false} showStatus={true} sign={'-'} leaveReview={true}/>
    if(price > 0)return <SimpleBalanceEvent text={'Пополнение баланса'} cost={`+${price}`}/>
    if(price < 0)return <SimpleBalanceEvent text={'Вывод средств'} cost={`${price}`}/>
    return null;
};

const Balance = () => {
    const [inputValue, setInput] = useState('');
    const [openedSub, {open: openSub, close: closeSub}] = useDisclosure();
    const [openedAdd, {open: openAdd, close: closeAdd}] = useDisclosure();
    const [balanceList, updateBalanceList] = useQuery(api.balance.getBalanceList)

    const addBalance = async () => {
        await api.balance.postReplenish({
            price: inputValue,
        });
        await updateBalanceList()
        setInput('');
        closeAdd();
    }
    const subBalance = async () => {
        await api.balance.postWithdraw({
            price: inputValue,
        });
        await updateBalanceList()
        setInput('');
        closeSub();
    }

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
            <Group mb={35} mt={35} justify="right">
                <Button onClick={openAdd}>Пополнить</Button>
                <Button onClick={openSub}>Вывести</Button>
            </Group>
            {balanceList&&
                balanceList.content.map(event => <BalanceCard {...event} />)
            }
        </>
    )
}

export default Balance;