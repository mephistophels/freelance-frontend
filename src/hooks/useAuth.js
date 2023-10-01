import { useSelector } from 'react-redux'

export const useAuth = () => {
  const data = useSelector((state) => state.auth);
  const isAuth = !!data.access;
  return {
    isAuth,
    ...data
  };
}