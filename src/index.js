import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import FriendsList from "./client/pages/FriendsList/FriendsList";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store/createStore";

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  window.isMobile = true;
} else {
  window.isMobile = false;
}

ReactDOM.render(
  <Provider store={store()}>
    <React.StrictMode>
      <FriendsList />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
