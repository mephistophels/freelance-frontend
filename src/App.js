import { store } from "./store";
import { Provider } from "react-redux";
import '@mantine/core/styles.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {useEffect} from "react";
import {axiosInstance} from "./api/instance";
import {API} from "./consts";
const App = () => {
    useEffect(() => {
        const data = axiosInstance.post(API.REPLENISH_BALANCE_POST, {price: 1000})
    }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    );
}

export default App;
