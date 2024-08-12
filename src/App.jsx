import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Body />
    </Provider>
  );
}

export default App;
