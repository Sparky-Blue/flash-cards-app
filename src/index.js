import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import flashCardApp from "./reducers";
import "./index.css";
import App from "./App";

const store = createStore(flashCardApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
