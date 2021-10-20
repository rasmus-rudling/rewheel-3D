import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
	query GetAllProducts {
		getAllProducts {
			id
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

export const GET_PRODUCT = gql`
	query GetProduct {
		getProduct {
			products
			createdBy
		}
	}
`;