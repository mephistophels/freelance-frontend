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

const userDto = {
    id: 1,
    createdAt: new Date(),
    email: 'user@example.com',
    surname: 'freder',
    name: 'John',
    patronomyc: 'Gresovich',
    birthday: new Date() - 18,
    balance: 1000,
    rating: 4.5
};

export function Header() {
    const location = useLocation().pathname;
    const isImplementer = location.includes('implementer')
    const locationSplit = location.split('/').filter(v => v != '')
    const isExchange = (PATH.IMPLEMENTOR_EXCHANGE === location || locationSplit.length === 2 && locationSplit[1] !== 'todo');

    useEffect(() => {
        const data = api.balance.replenish({price: 1000});
    }, []);

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
                                    <Title order={4} style={{color: '#777777'}}>{userDto.balance}</Title><Coin/>
                                </Group>
                            </Link>
                            <UserCard user={userDto} isImplementor={isImplementer} size='60px' reverse radius='xl' edit={true}/>
                        </Group>
                    </Group>
                </Container>
            </header>
        </>


    );
}