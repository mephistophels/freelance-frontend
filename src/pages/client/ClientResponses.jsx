import React from 'react'
import ResponsesList from '../../components/ResponsesList/ResponsesList';
import { Link } from 'react-router-dom';
import { Group, Text, Title } from '@mantine/core';
import { Coin } from '../../res/icons/coin';
import OrderCard from '../../components/OrdersList/OrderCard/OrderCard';

const responses = [
  {
    message: 'rwbvobfvhjobofhjvbowjfbv johwdbf voheb fovh wohjfv ojhfds vjh ',
    user: {
      name: 'valya',
      rating: '4.9',
    },
  },
  {
    message: 'rwbvobfvhjobofhjvbowjfbv johwdbf voheb fovh wohjfv ojhfds vjh ',
    user: {
      name: 'valya',
      rating: '4.9',
    },
  },
  {
    message: 'rwbvobfvhjobofhjvbowjfbv johwdbf voheb fovh wohjfv ojhfds vjh ',
    user: {
      name: 'valya',
      rating: '4.9',
    },
  }
];

const task = {
  id: 324,
  title: 'Создание сайта',
  description: 'Требуется веб-разработчик для создания корпоративного сайта. Сайт должен быть адаптивным и оптимизированным под SEO.',
  cost: 20000,
  creator: {
    name: 'Марина',
    rating: '4.8'
  }
};

const ClientOrderApplications = () => {

  const {
    id,
    title,
    description,
    cost,
    creator,
  } = task;

  return (
    <div>
      <Link to={'/client/orders/my'}><Text size="sm" style={{fontWeight: 800}} color="#5F5A5A">{"< К списку проектов"}</Text></Link>
      <br />
      <OrderCard {...task}/>
      <ResponsesList responses={responses}/>
    </div>
  )
}

export default ClientOrderApplications;