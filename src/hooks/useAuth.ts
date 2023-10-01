import { useSelector } from 'react-redux'
import { IStore } from '../store';

export const useAuth = () => {
  const data = useSelector((state: IStore) => state.auth);
  const isAuth = !!data.access;
  return {
    isAuth,
    ...data
  };
}