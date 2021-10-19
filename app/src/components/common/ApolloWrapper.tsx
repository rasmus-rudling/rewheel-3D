import { useEffect, useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  NormalizedCacheObject,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

const backend_url = process.env.BACKEND_URI;
const backend_port = process.env.BACKEND_PORT;

interface Props {
  children: JSX.Element;
}

const ApolloWrapper = ({ children }: Props) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [bearerToken, setBearerToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const token = isAuthenticated ? await getAccessTokenSilently() : "";
      setBearerToken(token);
    };
    getToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  const httpLink = new HttpLink({
    uri: `${backend_url}:${backend_port}/graphql`,
  });

  const authLink = setContext((_, { headers }, ...rest) => {
    if (!bearerToken) return { headers, ...rest };
  });

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
  });

  // client
  //   .query({
  //     query: gql`
  //       query Query {
  //         getAllBikes {
  //           id
  //           color
  //         }
  //       }
  //     `,
  //   })
  //   .then((result) => console.log(result));

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
