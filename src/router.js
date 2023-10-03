import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import {Wrapper} from "./components/Wrapper";
import Home from './pages/home/Home';
import ClientMyOrders from './pages/client/ClientMyOrders';
import ImplementerAvailableOrders from './pages/implementer/ImplementerAvailableOrders';
import ImplementerTask from "./pages/implementer/ImplementerOrderRespond";
import ImplementerTodo from "./pages/implementer/ImplementerTodo";
import ImplementerCloseOrder from "./pages/implementer/ImplementerCloseOrder";
import ClientCheckOrder from "./pages/client/ClientCheckOrder";
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
                path: "/implementer/available",
                element: <ImplementerAvailableOrders />,
            },
            {
                path: "/implementer/todo",
                element: <ImplementerTodo />,
            },
            {
                path: "/implementer/finish/:id",
                element: <ImplementerCloseOrder />,
            },
            {
                path: "/implementer/:id",
                element: <ImplementerTask />,
            },
            {
                path: "/client/orders/my",
                element: <ClientMyOrders />,
            },
            {
                path: "/client/finish/:id",
                element: <ClientCheckOrder />,
            },
            {
                path: "/balance",
                element: <Balance />,
            }
        ]
    }
]);
