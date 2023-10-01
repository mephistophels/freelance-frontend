import { Button, Text } from "@mantine/core";
import { useParams } from "react-router-dom";

const data = {
  id: 321,
  title: 'lorepsum',
  description: 'loremumrjkfnwerfwpkrfhwergfhwbnerfpjkvnwpejkfnpkjwerfn',
  cost: 23123,
  creator: {
    name: 'vasya',
    rating: '123'
  }
}

const style = {
  fontSize: '30px',
  color: 'rgba(255,255,255,1)',
  fontWeight: '500',
  backgroundColor: 'rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '10px',
  width: 'auto',
}

const ImplementerId = () => {

const {id} = useParams();

  return (
    <div>
      <h1 style={{marginBottom: '18px'}}><span style={style}>Задание от {data.creator.name}</span></h1>
      <h1 style={{marginBottom: '18px'}}><span style={style}>{data.title}</span></h1>
      <h1 style={{marginBottom: '18px'}}><span style={style}>{data.description}</span></h1>
      <div style={{display: 'grid', justifyContent: 'center'}}>
        <div/>
        <Button variant="filled" color="lime">Хочу взяться</Button>
      </div>
    </div>
  );
};

export default ImplementerId;