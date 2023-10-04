import {Avatar, Badge, Group, Text} from "@mantine/core";
import classes from "../pages/implementer/Implementer.module.css";
import { Link } from "react-router-dom";
import { PATH } from "../consts";



export const UserCard = ({user, isImplementor, size='xl', radius='sm', link}) => {
    const {name, rating, id} = user
    return (
            <Group position='apart' gap={5} align='stretch'>
                <Avatar mr={10} size={size} radius={radius} src={link}>{name[0]}</Avatar>
                <div className={`flex flex-col justify-between`}>
                    <div>
                        <Text size='xs'>{isImplementor?"Исполнитель":"Заказчик"}</Text>
                        <Link to={`${PATH.PROFILE}${id}`}><Text size='xl' mt={-8} fw={500} weight='md'>{name}</Text></Link>
                    </div>
                    <Badge color='teal' variant='light'>{rating}</Badge>
                </div>
            </Group>
    );
}