import { Button, Card, Group, Text, Title } from "@mantine/core";
import OrderCard from "../components/OrdersList/OrderCard/OrderCard";
import { BALANCE_EVENT, TASK_STATUS } from "../consts";
import { Coin } from "../res/icons/coin";




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
    case BALANCE_EVENT.TASK_CLOSE_ADDING: return <OrderCard {...target} showShadow={false} showStatus={true} sign={'+'}/>
    case BALANCE_EVENT.TASK_CLOSE_SUBSTRACTION: return <OrderCard {...target} showShadow={false} showStatus={true} sign={'-'}/>
    case BALANCE_EVENT.ADDING: return <SimpleBalanceEvent text={'Пополнение баланса'} cost={`+${target}`}/>
    case BALANCE_EVENT.SUBSTRACTION: return <SimpleBalanceEvent text={'Вывод средств'} cost={`-${target}`}/>
  }
};

const Balance = () => {
  return (
    <>
      <Group mb={35} mt={35} justify="right">
        <Button>Пополнить</Button>
        <Button>Вывести</Button>
      </Group>
      <div>
        {
          data.map(event => <BalanceCard {...event} />)
        }
      </div>
    </>
  )
}

export default Balance;