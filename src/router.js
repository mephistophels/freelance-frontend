
import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import {Wrapper} from "./components/Wrapper";

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
        element: <Wrapper/>,
        children: [
            {
                path: "/",
                element: <div>Implementer</div>,
            },
        ]
    }
]);
