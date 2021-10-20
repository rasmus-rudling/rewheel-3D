import { gql } from "@apollo/client";

export const GET_ALL_BIKES = gql`
  query GetAllBikes {
    getAllBikes {
      id
      products
      createdBy
    }
  }
`;
