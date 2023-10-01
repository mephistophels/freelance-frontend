import { UserRole } from "../constants/user";
import LoginPage from "../pages/auth/login/page";
import RegistrationPage from "../pages/auth/registration/page";
import MyTasksId from "../pages/client/mytask/[id]/page";
import MyTasks from "../pages/client/mytask/page";
import HomePage from "../pages/home/page";
import TaskIdPage from "../pages/implementer/task/[id]/page";
import TaskPage from "../pages/implementer/task/page";
import { PATH } from "./path";

interface link {
  component: () => JSX.Element,
  link: string
}

const publicLinks: link[] = [
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
    component: LoginPage
  }
];

const implementerLinks: link[] = [
  {
    link: PATH.HOME,
    component: HomePage
  },
  {
    link: PATH.TASK,
    component: TaskPage
  },
  {
    link: PATH.TASKID,
    component: TaskIdPage
  }
];

const clientLinks: link[] = [
  {
    link: PATH.HOME,
    component: HomePage
  },
  {
    link: PATH.MYTASK,
    component: MyTasks
  },
  {
    link: PATH.MYTASKID,
    component: MyTasksId
  }
];

export const createLinks = (userRole: string): link[] => {
  switch (userRole) {
    case UserRole.client:      return clientLinks;
    case UserRole.implementer: return implementerLinks;
    default: return publicLinks;
  }
}