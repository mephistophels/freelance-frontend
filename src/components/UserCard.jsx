import {Avatar, Badge, Group, Text} from "@mantine/core";
import classes from "../pages/implementer/Implementer.module.css";
import { Link } from "react-router-dom";
import { PATH } from "../consts";

export function rateToColor(rate) {
    const hue = (rate - 1) * (120 / 4);
    const saturation = 100; // fully saturated
    const lightness = 40; // medium lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export const UserCard = ({user, isImplementor, size='xl', radius='sm', link, edit}) => {
    const {mark, name, surname, id} = user;
    const rate = (isImplementor ? mark?.markAsExecutor : mark?.markAsCustomer) || 0;
    if (!id) return <div></div> 
    return (
        <Link to={`${PATH.PROFILE}${id}` + (edit ? '?edit=true' : '')}>
            <Group position='apart' gap={5} align='stretch'>
                <Avatar mr={10} size={size} radius={radius} src={link}>{name[0] + surname[0]}</Avatar>
                <div className={`flex flex-col justify-between`}>
                    <div>
                        <Text size='xs'>{isImplementor?"Исполнитель":"Заказчик"}</Text>
                        <Text size='xl' mt={-8} fw={500} weight='md'>{name}</Text>
                    </div>
                    {!!rate && <Badge color={rateToColor(rate)} variant='light'>
                        {rate.toFixed(1)}
                    </Badge>}
                </div>
            </Group>
        </Link>
    );
}