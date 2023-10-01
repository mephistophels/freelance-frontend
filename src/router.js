import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import {Wrapper} from "./components/Wrapper";
import Home from './pages/home/Home';
import Client from './pages/client/Client';
import Implementer from './pages/implementer/Implementer';
import ImplementerId from "./pages/implementer/ImplementerId";

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
                path: "/client",
                element: <Client />,
            },
            {
                path: "/imlementer/:id",
                element: <ImplementerId />,
            },
        ]
    }
]);
