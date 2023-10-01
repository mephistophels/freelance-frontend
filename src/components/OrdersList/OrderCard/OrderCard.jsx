import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon, Button } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import './OrderCard.css';
import { IconUpload } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export default function OrderCard({data}) {

  const navigate = useNavigate();
console.log(data)
  return (
    <Card withBorder padding="lg" radius="md" >
      <Group justify="space-between">
        <MantineLogo type="mark" size="2rem" />
        <Badge>12 days left</Badge>
      </Group>

      <Text fz="lg" fw={500} mt="md">
        {data.title}
      </Text>
      {/* <div style={{height: '100px'}}> */}
        <h1 className='element-row-text-default'>
          {data.description}
        </h1>
      {/* </div> */}

      <Text c="dimmed" fz="sm" mt="md">
        Прикреплено файлов:{' '}
        <Text span fw={500} c="bright">
          4
        </Text>
      </Text>
      <Text c="dimmed" fz="sm" mt="md">
        Вознаграждение:{' '}
        <Text span fw={500} c="bright">
          {data.cost}
        </Text>
      </Text>
      <Text c="dimmed" fz="sm" mt="md">
        создатель:{' '}
        <Text span fw={500} c="bright">
          {data.creator.name}
        </Text>
      </Text>
      <Text c="dimmed" fz="sm" mt="md">
        Рейтинг создателя:{' '}
        <Text span fw={500} c="bright">
          {data.creator.rating}
        </Text>
      </Text>
      <Group justify="space-between" mt="md">
        <div/>
        <Button onClick={e => navigate(`/imlementer/${data.id}`)}>Ознакомиться</Button>
      </Group>
    </Card>
  );
}