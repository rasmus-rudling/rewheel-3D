import { gql } from "@apollo/client";

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    getCurrentUser(email: $email) {
      bikeBuilds
      email
      firstName
      lastName
      id
      username
      imgUrl
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      bikeBuilds
      email
      firstName
      lastName
      id
      username
      imgUrl
    }
  }
`;
