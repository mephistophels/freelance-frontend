import { Avatar, Badge, Card, Container, Group, Image, Text, Textarea, Title } from '@mantine/core';
import React from 'react'
import { useParams } from 'react-router';
import './Profile.css';

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

const Profile = () => {

  const {id} = useParams();
  const userBD = `${user.birthday.getDay()}.${user.birthday.getMonth()}.${user.birthday.getFullYear()}`;

  return (
    <Card withBorder mt={50}>
      <Group mb={20}>
        <Avatar 
          src={user.img}
          style={{height: '100%', width: '100%', maxWidth: '215px', borderRadius: '10px'}}
          alt='-'
        />
        <Container ml={0}>
          <Group mb={10}>
            <Title>{user.name} {user.surname} {user.patronymic}</Title>
            <Badge title='исполнитель' size='xl' color='teal' variant='light'>{user.implementer_rating}</Badge>
            <Badge title='заказчик' size='xl' color='yellow' variant='light'>{user.client_rating}</Badge>
          </Group>
          <Text mb={10} size='xl' c='#409C93'>{user.email}</Text>
          <Text mb={10} size='xl'>Родился: {userBD}</Text>
          <Text mb={10} size='xl' c='#409C93'>{user.email}</Text>
        </Container>
      </Group>
      <Text mb={10} size='xl'>О себе</Text>
      <textarea className='biography' disabled>
        {user.biography}
      </textarea>
    </Card>
  );
}

export default Profile;