import { gql } from "@apollo/client";

export const GET_ALL_BIKES = gql`
<<<<<<< HEAD
  query GetAllBikes {
    getAllBikes {
      id
      products
      createdBy
    }
  }
=======
	query GetAllBikes {
		getAllBikes {
			products
			createdBy
		}
	}
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de
`;



