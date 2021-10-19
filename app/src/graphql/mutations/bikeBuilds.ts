import { gql } from '@apollo/client';

export const SAVE_NEW_BIKE = gql`
	mutation SaveNewBike($products: [String]!, $createdBy: String!) {
		addBike(products: $products, createdBy: $createdBy) {
			id
			createdBy
		}
	}
`;
