import { gql } from "@apollo/client";

export const GET_ALL_BIKES = gql`
  query GetAllBikes {
    getAllBikes {
      products
      createdBy
    }
  }
`;

export const GET_MY_BIKES = gql`
  query GetMyBikes($email: String!) {
    getMyBikes(email: $email) {
      products
      createdBy
    }
  }
`;
