import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }
  type Token {
    value: String!
  }
  type Bike {
    id: ID!
    color: String!
  }
  type Query {
    getCurrentUser: User
    getAllBikes: [Bike!]!
  }
  type Mutation {
    createUser(username: String!, password: String!): User
    login(username: String!, password: String!): Token
    addBike(color: String!): Bike!
  }
`;
