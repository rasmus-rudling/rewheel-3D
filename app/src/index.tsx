import React from "react";
import ReactDOM from "react-dom";
import "../build/build.css";
import App from "./App";
import "./style/tailwind.css";
import auth from "./Auth";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import reportWebVitals from "./reportWebVitals";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: auth.getIdToken(),
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
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
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
