import { useEffect, useState } from 'react';
import { ReactComponent as Notify } from '../../res/icons/notify.svg';
import { ReactComponent as User } from '../../res/icons/user.svg';
import {Container, Group, Tabs, Text, TextInput, Title} from '@mantine/core';
import classes from './Header.module.css';
import { CustomSegmentedControl } from '../CustomSegmentedControl/CustomSegmentedControl';
import {Coin} from "../../res/icons/coin";
import { Link, useLocation } from 'react-router-dom';
import {PATH} from "../../consts";

const userDto = {
    id: 1,
    createdAt: new Date(),
    email: 'user@example.com',
    surname: 'freder',
    name: 'John',
    patronomyc: 'Gresovich',
    birthday: new Date() - 18,
    balance: 1000,

};

export function Header() {
    const location = useLocation().pathname;
    return (
        <>
            <header className={classes.header}>
                <Container size="lg" className={classes.inner}>
                    <Group justify="space-between" w='100%'>
                        <CustomSegmentedControl />
                        <Group gap={5} visibleFrom="xs">
                            {location.includes('implementer') && <div className={classes.linkwrapper}>
                                <Link className={PATH.IMPLEMENTOR_EXCHANGE!==location?classes.simpletlink:classes.currentlink} to={PATH.IMPLEMENTOR_EXCHANGE}>Биржа</Link>
                                <Link className={PATH.IMPLEMENTOR_EXCHANGE===location?classes.simpletlink:classes.currentlink} to={PATH.ORDERS_OF_IMPLEMENTOR}>Взятые заказы</Link>
                            </div>}
                            <Notify style={{marginRight: "15px"}}/>
                            <Group position='apart' gap={5} mr={10}>
                                <Title order={4} style={{color: '#777777'}}>{userDto.balance}</Title><Coin color='#777777'/>
                            </Group>
                            <User style={{height: "40px"}}/>
                            <div className='font-semibold'>
                                <h3>{userDto.name} {userDto.surname}</h3>
                            </div>
                        </Group>
                    </Group>
                </Container>
            </header>
        </>


    );
}