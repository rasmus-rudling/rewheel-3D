import { gql } from "@apollo/client";

export const SAVE_NEW_BIKE = gql`
  mutation addBike($email: String!, $products: [String]!, $createdBy: String!) {
    addBike(email: $email, products: $products, createdBy: $createdBy) {
      # id
      createdBy
    }
  }
`;
