import { useEffect, useState } from 'react';
import { ReactComponent as Notify } from '../../res/icons/notify.svg';
import { ReactComponent as User } from '../../res/icons/user.svg';
import {Container, Group, Tabs, TextInput, Title} from '@mantine/core';
import classes from './Header.module.css';
import { CustomSegmentedControl } from '../CustomSegmentedControl/CustomSegmentedControl';
import {Coin} from "../../res/icons/coin";
import { Link, useLocation } from 'react-router-dom';

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

function getClientImplementerLinks(path) {
    switch (path) {
        case '/implementer/available': return (
            <div className={classes.linkwrapper}>
                <Link className={classes.currentlink} to='/implementer/available'>Найти</Link>
                <Link className={classes.simpletlink} to='/implementer/todo'>В разработке</Link>
            </div>
        )
        case '/implementer/todo': return (
            <div className={classes.linkwrapper}>
                <Link className={classes.simpletlink} to='/implementer/available'>Найти</Link>
                <Link className={classes.currentlink} to='/implementer/todo'>В разработке</Link>
            </div>
        )
    }
}

export function Header() {

    const location = useLocation().pathname;
    const [headerLinks, setHeaderLinks] = useState(null);
    useEffect(() => {
        setHeaderLinks(getClientImplementerLinks(location));
    }, [location]);

    return (
        <>
            <header className={classes.header}>
                <Container size="lg" className={classes.inner}>
                    <CustomSegmentedControl />
                    <Group gap={5} visibleFrom="xs">
                        {headerLinks}
                        <Notify style={{marginRight: "15px"}}/>
                        <div style={{marginRight: "15px"}}>
                            <Link to='/balance'><label className={'font-semibold ' + classes.hv}>{userDto.balance}</label></Link>
                            <Coin style={{height: "30px", display: 'inline-block', marginLeft: '5px'}}/>
                        </div>
                        <User style={{height: "40px"}}/>
                        <div className='font-semibold'>
                            <h3>{userDto.name} {userDto.surname}</h3>
                        </div>
                    </Group>
                </Container>
            </header>
        </>


    );
}