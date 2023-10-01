import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createLinks } from './links';
import { UserRole } from '../constants/user';
import { useAuth } from '../hooks/useAuth';

const Router = () => {
  const user = useAuth();
  const links = createLinks(user.role);
  return (
    <BrowserRouter>
      <Routes>
      {
          links.map(({link, component}) => (
            <Route key={link} path={link} Component={component}/>
          ))
        }
      </Routes>
    </BrowserRouter>
  );
};

export default Router;