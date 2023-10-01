import { UserRole } from "../constants/user";
import Login from "../pages/auth/Login";
import RegistrationPage from "../pages/auth/Registration";
import MyTasks from "../pages/client/mytask/MyTask";
import HomePage from "../pages/home/Home";
import TaskPage from "../pages/implementer/Task";
import { PATH } from "./path";

const publicLinks = [
  {
    link: PATH.HOME,
    component: HomePage
  },
  {
    link: PATH.REGISTRATION,
    component: RegistrationPage
  },
  {
    link: PATH.LOGIN,
    component: Login
  }
];

const implementerLinks = [
  {
    link: PATH.HOME,
    component: HomePage
  },
  {
    link: PATH.TASK,
    component: TaskPage
  },
];

const clientLinks = [
  {
    link: PATH.HOME,
    component: HomePage
  },
  {
    link: PATH.MYTASK,
    component: MyTasks
  },
];

export const createLinks = (userRole) => {
  switch (userRole) {
    case UserRole.client:      return clientLinks;
    case UserRole.implementer: return implementerLinks;
    default:                   return publicLinks;
  }
}