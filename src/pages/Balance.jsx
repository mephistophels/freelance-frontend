import {Button, Card, Group, Input, Modal, Space, Text, Title} from "@mantine/core";
import OrderCard from "../components/OrdersList/OrderCard/OrderCard";
import {BALANCE_EVENT, TASK_STATUS} from "../consts";
import {Coin} from "../res/icons/coin";
import {useDisclosure} from "@mantine/hooks";


const data = [
    {
        event: BALANCE_EVENT.ADDING,
        target: 123,
    },
    {
        event: BALANCE_EVENT.SUBSTRACTION,
        target: 323,
    },
    {
        event: BALANCE_EVENT.TASK_CLOSE_ADDING,
        target: {
            id: 324,
            title: 'Создание сайта',
            description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
            cost: 20000,
            client: {
                name: 'Марина',
                rating: '4.8',
                id: '123'
            },
            status: TASK_STATUS.DONE,
        },
    },
    {
        event: BALANCE_EVENT.ADDING,
        target: 1235,
    },
    {
        event: BALANCE_EVENT.TASK_CLOSE_SUBSTRACTION,
        target: {
            id: 324,
            title: 'Создание сайта',
            description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
            cost: 20000,
            client: {
                name: 'Марина',
                rating: '4.8',
                id: '123'
            },
            status: TASK_STATUS.DONE,
        },
    },
    {
        event: BALANCE_EVENT.ADDING,
        target: 123,
    },
    {
        event: BALANCE_EVENT.SUBSTRACTION,
        target: 323,
    },
    {
        event: BALANCE_EVENT.TASK_CLOSE_ADDING,
        target: {
            id: 324,
            title: 'Создание сайта',
            description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
            cost: 20000,
            client: {
                name: 'Марина',
                rating: '4.8',
                id: '123'
            },
            status: TASK_STATUS.DONE,
        },
    },
    {
        event: BALANCE_EVENT.ADDING,
        target: 123,
    },
    {
        event: BALANCE_EVENT.SUBSTRACTION,
        target: 323,
    },
    {
        event: BALANCE_EVENT.TASK_CLOSE_ADDING,
        target: {
            id: 324,
            title: 'Создание сайта',
            description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
            cost: 20000,
            client: {
                name: 'Марина',
                rating: '4.8',
                id: '123'
            },
            status: TASK_STATUS.DONE,
        },
    },
    {
        event: BALANCE_EVENT.ADDING,
        target: 1235,
    },
    {
        event: BALANCE_EVENT.TASK_CLOSE_SUBSTRACTION,
        target: {
            id: 324,
            title: 'Создание сайта',
            description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
            cost: 20000,
            client: {
                name: 'Марина',
                rating: '4.8',
                id: '123'
            },
            status: TASK_STATUS.DONE,
        },
    },
    {
        event: BALANCE_EVENT.ADDING,
        target: 123,
    },
    {
        event: BALANCE_EVENT.SUBSTRACTION,
        target: 323,
    },
];

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

const BalanceCard = ({event, target}) => {
    switch (event) {
        case BALANCE_EVENT.TASK_CLOSE_ADDING:
            return <OrderCard {...target} showShadow={false} showStatus={true} sign={'+'} leaveReview={true}/>
        case BALANCE_EVENT.TASK_CLOSE_SUBSTRACTION:
            return <OrderCard {...target} showShadow={false} showStatus={true} sign={'-'} leaveReview={true}/>
        case BALANCE_EVENT.ADDING:
            return <SimpleBalanceEvent text={'Пополнение баланса'} cost={`+${target}`}/>
        case BALANCE_EVENT.SUBSTRACTION:
            return <SimpleBalanceEvent text={'Вывод средств'} cost={`-${target}`}/>
    }
};

const Balance = () => {
    const [openedSub, {open: openSub, close: closeSub}] = useDisclosure();
    const [openedAdd, {open: openAdd, close: closeAdd}] = useDisclosure();
    const addBalance = () => {
        closeAdd()
    }
    const subBalance = () => {
        closeSub()
    }

    return (
        <>
            <Modal opened={openedSub} onClose={closeSub} title="Вывод средств" centered>
                <Input leftSection={<Coin/>} placeholder="Введите сумму" size='lg' type='number'/>
                <Space h='lg'/>
                <Button onClick={subBalance}>Вывести</Button>
            </Modal>
            <Modal opened={openedAdd} onClose={closeAdd} title="Пополнение баланса" centered>
                <Input leftSection={<Coin/>} placeholder="Введите сумму" size='lg' type='number'/>
                <Space h='lg'/>
                <Button onClick={addBalance}>Пополнить</Button>
            </Modal>
            <Group mb={35} mt={35} justify="right">
                <Button onClick={openAdd}>Пополнить</Button>
                <Button onClick={openSub}>Вывести</Button>
            </Group>
            {
                data.map(event => <BalanceCard {...event} />)
            }
        </>
    )
}

export default Balance;