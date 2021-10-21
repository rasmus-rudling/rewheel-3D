import { useEffect, useState } from 'react';
import {
	ApolloClient,
	ApolloProvider,
	gql,
	NormalizedCacheObject,
	InMemoryCache,
	HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';

const backend_url = process.env.BACKEND_URI;
const backend_port = process.env.BACKEND_PORT;

interface Props {
	children: JSX.Element;
}


// TODO: Ellebrink?

const ApolloWrapper = ({ children }: Props) => {
	const { isAuthenticated, getAccessTokenSilently } = useAuth0();
	const [bearerToken, setBearerToken] = useState('');

	useEffect(() => {
		const getToken = async () => {
			const token = isAuthenticated ? await getAccessTokenSilently() : '';
			setBearerToken(token);
		};
		getToken();
	}, [getAccessTokenSilently, isAuthenticated]);

	const httpLink = new HttpLink({
		uri: `${backend_url}:${backend_port}/graphql`,
	});

	const authLink = setContext((_, { headers }) => {
		// return the headers to the context so httpLink can read them
		return {
			headers: {
				...headers,
				authorization: bearerToken ? `Bearer ${bearerToken}` : '',
			},
		};
	});

	const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
