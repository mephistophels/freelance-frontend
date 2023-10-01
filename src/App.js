import Router from "./routes/router";
import { store } from "./store";
import { Provider } from "react-redux";
import '@mantine/core/styles.css';
const App = () => {

  return (
    <Provider store={store}>
      <div>
        <Router />
      </div>
    </Provider>
    );
}

export default App;
