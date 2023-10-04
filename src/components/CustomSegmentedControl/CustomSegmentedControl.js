import { SegmentedControl } from '@mantine/core';
import classes from './CustomSegmentedControl.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {PATH} from "../../consts";

const pathArray = [PATH.IMPLEMENTOR_EXCHANGE, PATH.ORDERS_OF_CLIENT];
const roleArray = ['Я исполнитель', 'Я заказчик'];
export function CustomSegmentedControl() {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SegmentedControl
      onChange={e => navigate(pathArray[roleArray.indexOf(e)])}
      radius="sm"
      size="md"
      data={roleArray}
      color='gray.7'
      defaultValue={roleArray[pathArray.indexOf(location.pathname)]}
    />
  );
}