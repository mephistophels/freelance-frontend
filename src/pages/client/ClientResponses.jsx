import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {Button, Card, Group, NavLink, Text, Title} from '@mantine/core';
import { Coin } from '../../res/icons/coin';
import OrderCard from '../../components/OrdersList/OrderCard/OrderCard';
import {TypedOrderCard} from "../../components/OrdersList/OrdersList";
import {PATH, TASK_STATUS} from "../../consts";
import {UserCard} from "../../components/UserCard";
import {BackLink} from "../../components/BackLink";

const responses = [
  {
    message: 'rwbvobfvhjobofhjvbowjfbv johwdbf voheb fovh wohjfv ojhfds vjh ',
    user: {
      name: 'valya',
      rating: '4.9',
      id: '123'
    },
  },
  {
    message: 'rwbvobfvhjobofhjvbowjfbv johwdbf voheb fovh wohjfv ojhfds vjh ',
    user: {
      name: 'valya',
      rating: '4.9',
      id: '123'
    },
  },
  {
    message: 'rwbvobfvhjobofhjvbowjfbv johwdbf voheb fovh wohjfv ojhfds vjh ',
    user: {
      name: 'valya',
      rating: '4.9',
      id: '123'
    },
  }
];

const task = {
  id: 324,
  title: 'Создание сайта',
  description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
  cost: 20000,
  status: TASK_STATUS.CREATED,
  client: {
    name: 'Марина',
    rating: '4.8',
    id: '123'
  }
};

export const ClientResponses = () => {

  const navigate = useNavigate()

  return (
    <div>
      <BackLink/>
      <br />
      <OrderCard {...task} client={null} showGarbage showShadow={false}/>
      <br />
      {responses.map((response) => (
        <Card mb={20} p={20}>
          <UserCard user={response.user} isImplementor/>
          <Text mt={20}>{response.message}</Text>
          <div>
            <Button mt={20} color="teal" variant='outline'>Выбрать как исполнителем</Button>
          </div>
        </Card>
      ))}

    </div>
  )
}

