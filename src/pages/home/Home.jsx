import { useAuth } from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";


const HomePage = () => {

  const user = useAuth();
  console.log(user)

  return (
      <Navigate to={'/client/orders/my'}/>
  );
};

export default HomePage;