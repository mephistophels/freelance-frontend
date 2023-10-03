import { SegmentedControl } from '@mantine/core';
import classes from './CustomSegmentedControl.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const pathArray = ['/implementer/available', '/implementer/todo', '/client/orders/my', '/clienttodo'];
const roleArray = ['Я исполнитель', 'Я заказчик'];
export function CustomSegmentedControl() {

  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <SegmentedControl
      onChange={e => navigate(pathArray[roleArray.indexOf(e) * 2])}
      radius="xl"
      size="md"
      data={roleArray}
      classNames={classes}
      defaultValue={roleArray[pathArray.indexOf(location) >> 1]}
    />
  );
}