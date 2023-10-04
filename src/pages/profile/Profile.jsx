import { Avatar, Badge, Button, Card, Container, Group, Image, Input, InputLabel, Text, Textarea, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './Profile.css';
import { useSearchParams, useLocation } from 'react-router-dom';
import {useForm} from "../../hooks";

const user = {
  email: 'user@example.com',
  name: 'John',
  surname: 'Freder',
  patronymic: 'Романович',
  birthday: new Date(2000),
  createdAt: '2023-10-03T20:13:02.238393',
  img: 'https://i.pinimg.com/originals/fc/d5/71/fcd5716879a745c8beb6f7ef4b3bd8b6.gif',
  implementer_rating: '4.9',
  client_rating: '4.3',
  biography: 'loremwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberiwefnapswieufbpiquwebfpiuqbewfipbefiuhbdfihgbipdfbgipbrpfigberi'
};

const inputStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  fontSize: '34px',
  fontWeight: 'bold',
  marginRight: '10px',
}

const Profile = () => {

  const {id} = useParams();
  const edit = new URLSearchParams(useLocation().search).get('edit');
  const userBD = `${user.birthday.getDay()}.${user.birthday.getMonth()}.${user.birthday.getFullYear()}`;

  const {values, name, surname, patronymic, email, birthday, biography} = useForm({
    name: user.name,
    surname: user.surname,
    patronymic: user.patronymic,
    email: user.email,
    birthday: `${user.birthday.getDay()}.${user.birthday.getMonth()}.${user.birthday.getFullYear()}`,
    biography: user.biography,
  })

  const [changed, setChanged] = useState(true);
  // useEffect(() => {
    //   setChanged(true);
    // }, [name.value, surname.value, patronymic.value, email.value, biography.value, birthday.value])
    
  const editProfile = () => {
    
  }


  return (
    <Card withBorder mt={50}>
      <Group mb={20}>
        <Avatar 
          src={user.img}
          style={{height: '100%', width: '100%', maxWidth: '215px', borderRadius: '10px'}}
          alt='-'
        />
        <Container ml={0}>
          {edit &&
          <>
            <input 
              style={{...inputStyle, width: '120px'}}
              size={25}
              type="text"
              className='hv'
              {...name}
              />
            <input 
              style={{...inputStyle, width: '120px'}}
              size={25}
              type="text"
              className='hv'
              {...surname}
              />
            <input 
              style={{...inputStyle, width: '200px'}}
              size={25}
              type="text"
              className='hv'
              {...patronymic}
              />
            <div/>
            <input 
              style={{...inputStyle, width: '200px', color: '#409C93', fontSize: '20px', padding: '5px', fontWeight: '500'}}
              size={20}
              type="email"
              className='hv'
              {...email}
            />
            <div/>
            <InputLabel size='xl' mr={5}>Родился: </InputLabel>
            <input 
              style={{...inputStyle, width: '200px', fontSize: '20px', padding: '5px', fontWeight: '500'}}
              size={20}
              type="email"
              className='hv'
              {...birthday}
            />
          </>
          }
          {!edit &&
          <>
          <Group mb={10}>
            <Title>{user.name} {user.surname} {user.patronymic}</Title>
            <Badge title='исполнитель' size='xl' color='teal' variant='light'>{user.implementer_rating}</Badge>
            <Badge title='заказчик' size='xl' color='yellow' variant='light'>{user.client_rating}</Badge>
          </Group>
          <Text mb={10} size='xl' c='#409C93'>{user.email}</Text>
          <Text mb={10} size='xl'>Родился: {userBD}</Text>
          </>}
          <Text mb={10} size='xl' c='#409C93'>Зарегистрировался недавно</Text>
        </Container>
      </Group>
      <Text mb={10} size='xl'>О себе</Text>
      <textarea className='biography' disabled={!edit} {...biography} />

      {edit && changed && <Button style={{
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
      }} onClick={editProfile}>Редактировать</Button>}
    </Card>
  );
}

export default Profile;