import { useEffect, useState } from 'react';
import { ReactComponent as Notify } from '../../res/icons/notify.svg';
import { ReactComponent as User } from '../../res/icons/user.svg';
import {Container, Group, Tabs, TextInput, Title} from '@mantine/core';
import classes from './Header.module.css';
import { CustomSegmentedControl } from '../CustomSegmentedControl/CustomSegmentedControl';
import {Coin} from "../../res/icons/coin";
import { Link, useLocation } from 'react-router-dom';
const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

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
        case '/client': return (
            <div className={classes.linkwrapper}>
                <Link className={classes.currentlink} to='/client'>Мои задания</Link>
                <Link className={classes.simpletlink} to='/clienttodo'>Выполняются</Link>
            </div>
        )
        case '/clienttodo': return (
            <div className={classes.linkwrapper}>
                <Link className={classes.simpletlink} to='/client'>Мои задания</Link>
                <Link className={classes.currentlink} to='/clienttodo'>Выполняются</Link>
            </div>
        )
        case '/implementer': return (
            <div className={classes.linkwrapper}>
                <Link className={classes.currentlink} to='/implementer'>Мои задания</Link>
                <Link className={classes.simpletlink} to='/implementertodo'>В разработке</Link>
            </div>
        )
        case '/implementertodo': return (
            <div className={classes.linkwrapper}>
                <Link className={classes.simpletlink} to='/implementer'>Мои задания</Link>
                <Link className={classes.currentlink} to='/implementertodo'>В разработке</Link>
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

    const [active, setActive] = useState(links[0].link);
    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <>
            <header className={classes.header}>
                    <Container size="lg" className={classes.inner}>
                        <CustomSegmentedControl />
                        <Group gap={5} visibleFrom="xs">
                            {headerLinks}
                            <Notify style={{marginRight: "15px"}}/>
                            <div style={{marginRight: "15px"}}>
                                <label className='font-semibold'>{userDto.balance}</label>
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