import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

// ReactDOM.render(<App />, document.getElementById("root"));

// Providerというコンポーネントでアプリケーション全体を包んでやることで store にアクセスできるようになります。
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

