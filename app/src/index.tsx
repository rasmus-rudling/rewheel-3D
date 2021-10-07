import React from "react";
import ReactDOM from "react-dom";
import "../build/build.css";
import App from "./App";
import "./style/tailwind.css";
import auth from "./Auth";
import { ApolloClient } from "@apollo/client";
// import reportWebVitals from "./reportWebVitals";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   request: (operation) => {
//     operation.setContext((context) => ({
//       headers: {
//         ...context.headers,
//         authorization: auth.getIdToken(),
//       },
//     }));
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
