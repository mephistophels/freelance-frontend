import { store } from "./store";
import { Provider } from "react-redux";
import '@mantine/core/styles.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {useEffect} from "react";
import { api } from "./api";
const App = () => {

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    );
}

export default App;
