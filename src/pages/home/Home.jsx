import { useAuth } from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";
import {PATH} from "../../consts";


const HomePage = () => {

  const user = useAuth();
  // console.log(user)

  return (
      <Navigate to={PATH.IMPLEMENTOR_EXCHANGE}/>
  );
};

export default HomePage;