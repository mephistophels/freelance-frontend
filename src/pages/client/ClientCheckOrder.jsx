import {Avatar, Badge, Button, Card, Group, Text, Textarea, TextInput, Title} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {PATH, TASK_STATUS} from "../../consts";
import OrderCard from "../../components/OrdersList/OrderCard/OrderCard";
import {UserCard} from "../../components/UserCard";
import {getOrderById, postAcceptAnswer} from "../../api/actions/order";
import {useQuery} from "../../hooks";
import {BackLink} from "../../components/BackLink";
import {showAlert} from "../../utils";


const data = {
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
};

const solution = 'C++ по умолчанию не создает ромбовидного наследования: компилятор обрабатывает каждый путь наследования отдельно, в результате чего объект D будет на самом деле содержать два разных подобъекта A, и при использовании членов A потребуется указать путь наследования (B::A или C::A). Чтобы сгенерировать ромбовидную структуру наследования, необходимо воспользоваться виртуальным наследованием класса A на нескольких путях наследования: если оба наследования от A к B и от A к C помечаются спецификатором virtual (например, class B : virtual public A), C++ специальным образом проследит за созданием только одного подобъекта A, и использование членов A будет работать корректно. Если виртуальное и невиртуальное наследования смешиваются, то получается один виртуальный подобъект A и по одному невиртуальному подобъекту A для каждого пути невиртуального наследования к A. При виртуальном вызове метода виртуального базового класса используется так называемое правило доминирования: компилятор запрещает виртуальный вызов метода, который был перегружен на нескольких путях наследования.'

const ClientCheckOrder = () => {

    const {id} = useParams();
    const [task] = useQuery(getOrderById, id)

    function acceptOrder() {
        showAlert('Заказ принят!')
        postAcceptAnswer(id, task.executor.id)
    }
    return (
        <>
            <BackLink/>
            <Title order={1} mb={25}>Проверка сданного проекта</Title>
            <Title order={2} mb={25}>Описание проекта</Title>
            <OrderCard {...task} client={null} showShadow={false}/>
            <Title order={2} mb={25} mt={50}>Сданный проект</Title>
            {task&&<Card withBorder padding="xl" radius="md">
                <UserCard user={task.executor} isImplementor/>
                <Text mb={20} mt={20}>
                    {task.content}
                </Text>
                <Group>
                    <Link to={PATH.ORDERS_OF_CLIENT}><Button onClick={acceptOrder}>Принять и оплатить заказ</Button></Link>
                    <Text c='red'>Обратиться в поддержку по номеру +7 999 999 99 99</Text>
                </Group>
            </Card>}
        </>
    );
};

export default ClientCheckOrder;