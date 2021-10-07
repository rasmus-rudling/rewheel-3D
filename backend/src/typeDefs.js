import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    bikeBuilds: [Bike]!
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
    getMyBikes: [Bike]!
    getAllBikes: [Bike!]!
  }
  type Mutation {
    createUser(username: String!, password: String!): User
    login(username: String!, password: String!): Token
    addBike(color: String!): Bike!
    editBike(_id:ID!, color:String!): Bike!
    deleteBike(_id:ID!):Bike!
  }
`;
