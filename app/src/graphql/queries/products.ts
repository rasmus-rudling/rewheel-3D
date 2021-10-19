import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
	query GetAllProducts {
		getAllProducts {
			product_id
			name
			brand
			grade
			numReviews
			price
			type
		}
	}
`;
