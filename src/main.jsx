import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import firebaseConfig from "../firebaseConfig.js";
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
