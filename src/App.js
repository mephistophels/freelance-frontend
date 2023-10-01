import Router from "./routes/router";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {

  return (
    <Provider store={store}>
      <div className="">
        <Router />
      </div>
    </Provider>
    );
}

export default App;
