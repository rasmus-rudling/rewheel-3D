import { gql } from '@apollo/client';

export const GET_USER_BY_EMAIL = gql`
	query GetUserByEmail($email: String!) {
		user(email: $email) {
			name
			username
			id
			email
			avgWPM
		}
	}
`;
