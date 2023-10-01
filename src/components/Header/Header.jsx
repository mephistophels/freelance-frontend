import { useEffect, useState } from 'react';
// import api from '../../api';
import { ReactComponent as Notify } from '../../res/icons/notify.svg';
import { ReactComponent as Coin } from '../../res/icons/coin.svg';
import { ReactComponent as User } from '../../res/icons/user.svg';
import {Container, Group, Title} from '@mantine/core';
import classes from './Header.module.css';
import { CustomSegmentedControl } from '../CustomSegmentedControl/CustomSegmentedControl';
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

export function Header() {

    // const user = window.localStorage.getItem('user');
    // useEffect(() => {
    //     // get User balance
    //     // .then setUser 
    // })

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
                    <Title order={1}>Freelance</Title>
                    <CustomSegmentedControl />
                    <Group gap={5} visibleFrom="xs">
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