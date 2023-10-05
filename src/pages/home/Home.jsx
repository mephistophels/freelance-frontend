import { useAuth } from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";
import {PATH} from "../../consts";
import {useQuery} from "../../hooks";
import {axiosInstance} from "../../api/instance";


const HomePage = () => {

  const [user, _, {error}] = useQuery(() => axiosInstance.get('user/me').then(res => res.data))

  return (
      <>
        {error && <Navigate to={PATH.LOGIN}/>}
        {user && <Navigate to={PATH.IMPLEMENTOR_EXCHANGE}/>}
      </>

  );
};

export default HomePage;