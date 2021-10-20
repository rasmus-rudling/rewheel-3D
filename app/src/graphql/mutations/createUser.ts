import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation(
    $email: String!
    $username: String!
    $firstName: String
    $lastName: String
    $imgUrl: String
  ) {
    createUser(
      email: $email
      username: $username
      firstName: $firstName
      lastName: $lastName
      imgUrl: $imgUrl
    ) {
      id
      username
    }
  }
`;
