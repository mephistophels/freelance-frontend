import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Button, Card, Group, NavLink, Text, Title} from '@mantine/core';
import { Coin } from '../../res/icons/coin';
import OrderCard from '../../components/OrdersList/OrderCard/OrderCard';
import {TypedOrderCard} from "../../components/OrdersList/OrdersList";
import {PATH, TASK_STATUS} from "../../consts";
import {UserCard} from "../../components/UserCard";
import {BackLink} from "../../components/BackLink";
import {useQuery} from "../../hooks";
import {api} from "../../api";
import {postAcceptRequest, postAcceptResponse} from "../../api/actions/order";
import {showAlert} from "../../utils";

export const ClientResponses = () => {
  const {id} = useParams();
  const [responses] = useQuery(api.order.getResponsesList, id)
  const [task] = useQuery(api.order.getOrderById, id)
  return (
    <div>
      <BackLink/>
      <br />
      {task && <OrderCard {...task} showGarbage showShadow={false}/>}
      <br />
        {responses && !responses.content.length && <Title order={1} mb={25}>Откликов пока нет</Title>}
      {responses && responses.content.map((response) => (
        <Card mb={20} p={20}>
          <UserCard user={response.executor} isImplementor/>
          <Text mt={20}>{response.content}</Text>
          <div>
            <Link to={PATH.ORDERS_OF_CLIENT}><Button onClick={()=>{
              postAcceptRequest(id, response.id)
              showAlert('Заявка принята')
            }} mt={20} color="teal" variant='outline'>Выбрать как исполнителем</Button>
            </Link>
          </div>
        </Card>
      ))}

    </div>
  )
}

