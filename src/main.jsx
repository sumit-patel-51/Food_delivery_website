import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Usercontaxt from "./contaxt/Usercontaxt.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Usercontaxt>
      <App />
    </Usercontaxt>
  </Provider>
);
