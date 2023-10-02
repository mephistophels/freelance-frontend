import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import {Wrapper} from "./components/Wrapper";
import Home from './pages/home/Home';
import Client from './pages/client/Client';
import ClientTodo from './pages/client/ClientTodo';
import Implementer from './pages/implementer/Implementer';
import ImplementerId from "./pages/implementer/ImplementerId";
import ImplementerTodo from "./pages/implementer/ImplementerTodo";
import ImplementerFinish from "./pages/implementer/ImplementerFinish";
import ClientFinish from "./pages/client/ClientFinish";
import Balance from "./pages/balance/Balance";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registration",
        element: <Registration/>
    },
    {
        path: "/",
        element: <Wrapper />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/implementer",
                element: <Implementer />,
            },
            {
                path: "/implementertodo",
                element: <ImplementerTodo />,
            },
            {
                path: "/implementertodo/finish/:id",
                element: <ImplementerFinish />,
            },
            {
                path: "/implementer/:id",
                element: <ImplementerId />,
            },
            {
                path: "/client",
                element: <Client />,
            },
            {
                path: "/clienttodo",
                element: <ClientTodo />,
            },
            {
                path: "/clienttodo/finish/:id",
                element: <ClientFinish />,
            },
            {
                path: "/balance",
                element: <Balance />,
            }
        ]
    }
]);
