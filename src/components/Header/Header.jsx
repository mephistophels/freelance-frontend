import {useEffect, useState} from 'react';
import {ReactComponent as Notify} from '../../res/icons/notify.svg';
import {ReactComponent as User} from '../../res/icons/user.svg';
import {Container, Group, Tabs, Text, TextInput, Title} from '@mantine/core';
import classes from './Header.module.css';
import {CustomSegmentedControl} from '../CustomSegmentedControl/CustomSegmentedControl';
import {Coin} from "../../res/icons/coin";
import {Link, useLocation} from 'react-router-dom';
import {PATH} from "../../consts";
import {UserCard} from "../UserCard";
import { api } from '../../api';

export function Header() {

    const [user, setUser] = useState({});

    useEffect(async () => {
        api.auth.getMe()
        .then(data => data.data)
        .then(data => {
            setUser(data);
        })

    }, []);

    const location = useLocation().pathname;
    const isImplementer = location.includes('implementer')
    const locationSplit = location.split('/').filter(v => v != '')
    const isExchange = (PATH.IMPLEMENTOR_EXCHANGE === location || locationSplit.length === 2 && locationSplit[1] !== 'todo')
    return (
        <>
            <header className={classes.header}>
                <Container size="lg" className={classes.inner}>
                    <Group justify="space-between" w='100%'>
                        <CustomSegmentedControl/>
                        <Group gap={5} visibleFrom="xs">
                            {location.includes('implementer') && <div className={classes.linkwrapper}>
                                <Link className={!isExchange ? classes.simpletlink : classes.currentlink}
                                      to={PATH.IMPLEMENTOR_EXCHANGE}>Биржа</Link>
                                <Link className={isExchange ? classes.simpletlink : classes.currentlink}
                                      to={PATH.ORDERS_OF_IMPLEMENTOR}>Взятые заказы</Link>
                            </div>}
                            <Link to={PATH.BALANCE}>
                                <Group position='apart' gap={5} mr={10}>
                                    <Title order={4} style={{color: '#777777'}}>{user?.balance?.amount || 0}</Title><Coin/>
                                </Group>
                            </Link>
                            <UserCard user={user} isImplementor={isImplementer} size='60px' reverse radius='xl' edit={true}/>
                        </Group>
                    </Group>
                </Container>
            </header>
        </>


    );
}