import {Avatar, Badge, Group, Text} from "@mantine/core";
import classes from "../pages/implementer/Implementer.module.css";



export const UserCard = ({user, isImplementor}) => {
    return (
            <Group position='apart' gap={5} align='stretch'>
                <Avatar mr={10} size='xl' radius='sm' src='https://i.pravatar.cc/300?img=3' />
                <div className='flex flex-col justify-between'>
                    <div>
                        <Text size='xs'>{isImplementor?"Исполнитель":"Заказчик"}</Text>
                        <Text size='xl' mt={-8} fw={500} weight='md'>{user.name}</Text>
                    </div>
                    <Badge color='teal' variant='light'>{user.rating}</Badge>
                </div>
            </Group>
    );
}