import {Avatar, Badge, Button, Card, Group, Text, Textarea, TextInput, Title} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {PATH, TASK_STATUS} from "../../consts";
import OrderCard from "../../components/OrdersList/OrderCard/OrderCard";
import {UserCard} from "../../components/UserCard";


const data = {
    id: 324,
    title: 'Создание сайта',
    description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
    cost: 20000,
    client: {
      name: 'Марина',
      rating: '4.8'
    },
    status: TASK_STATUS.DONE,
};

const solution = 'C++ по умолчанию не создает ромбовидного наследования: компилятор обрабатывает каждый путь наследования отдельно, в результате чего объект D будет на самом деле содержать два разных подобъекта A, и при использовании членов A потребуется указать путь наследования (B::A или C::A). Чтобы сгенерировать ромбовидную структуру наследования, необходимо воспользоваться виртуальным наследованием класса A на нескольких путях наследования: если оба наследования от A к B и от A к C помечаются спецификатором virtual (например, class B : virtual public A), C++ специальным образом проследит за созданием только одного подобъекта A, и использование членов A будет работать корректно. Если виртуальное и невиртуальное наследования смешиваются, то получается один виртуальный подобъект A и по одному невиртуальному подобъекту A для каждого пути невиртуального наследования к A. При виртуальном вызове метода виртуального базового класса используется так называемое правило доминирования: компилятор запрещает виртуальный вызов метода, который был перегружен на нескольких путях наследования.'

const ClientCheckOrder = () => {

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
            <Link to={PATH.IMPLEMENTOR_EXCHANGE}><Text size="sm" style={{fontWeight: 800}} c="#5F5A5A">{"< К списку проектов"}</Text></Link>
            <Title order={1} mb={25}>Подать заявку на исполнение</Title>
            <Title order={2} mb={25}>Описание проекта</Title>
            <OrderCard {...data} client={null} showShadow={false}/>
            <Title order={2} mb={25} mt={50}>Сданный проект</Title>
            <Card withBorder padding="xl" radius="md">
                <UserCard user={client} isImplementor/>
                <Text mb={20} mt={20}>
                    {solution}
                </Text>
                <Group>
                    <Button>Принять и оплатить заказ</Button>
                    <Text c='red'>Обратиться в поддержку по номеру +7 999 999 99 99</Text>
                </Group>
            </Card>
        </>
        // <div>
        //     <BackLink/>
        //     <br /><br />
        //     <Card withBorder padding="xl" radius="md">
        //         <Group justify="space-between" mb={10}>
        //             <div className="mb-5">
        //                 <Title order={2}>{title}</Title>
        //                 <br />
        //                 <Text size="lg" style={{maxWidth: 700}}>{description}</Text>
        //             </div>
        //             <Group position='apart' gap={5}>
        //                 <Title order={4} style={{color: '#409C93'}}>{cost}</Title><Coin color='#409C93'/>
        //             </Group>
        //         </Group>
        //         <Group position='apart' gap={5} align='stretch'>
        //             <Avatar className={classes.avatar} mr={10} size='xl' radius='sm' src='https://i.pravatar.cc/300?img=3' />
        //             <div className='flex flex-col justify-between'>
        //                 <div>
        //                     <Text size='xs'>Заказчик</Text>
        //                     <Text size='xl' mt={-8} fw={500} weight='md'>{client.name}</Text>
        //                 </div>
        //                 <Badge color='teal' variant='light'>{client.rating}</Badge>
        //             </div>
        //         </Group>
        //     </Card>
        //     <br /><br />
        //     <h1 className={classes.titletext}>
        //         Решение готово
        //     </h1>
        //     <Card withBorder padding="xl" radius="md">
        //         {/* <Form.Control as="textarea" rows={3} style={{
        //             fontSize: '15px',
        //             fontWeight: '500',
        //             minHeight: '300px',
        //             padding: '20px',
        //             borderRadius: '10px',
        //         }}/> */}
        //         <textarea
        //             className={classes.areainput}
        //             value={solution}
        //         />
        //         <div style={{marginTop: '20px', display: 'grid'}}>
        //             <div style={{
        //                 margin: '0 auto'
        //             }}>
        //             <Button color="#C44137" style={{
        //                 width: '200px',
        //                 display: 'inline-block',
        //                 marginRight: '50px'
        //             }}>Послать на**й</Button>
        //             <Button color="#397E79" style={{
        //                 width: '200px',
        //                 display: 'inline-block',
        //                 marginLeft: '50px'
        //             }}>Принять</Button>
        //             </div>
        //         </div>
        //     </Card>
        // </div>
    );
};

export default ClientCheckOrder;