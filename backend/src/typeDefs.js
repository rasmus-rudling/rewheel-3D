import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    bikes: [Bike!]!
  }
  type Bike {
    id: ID!
    color: String!
  }
  type Mutation {
    addBike(color: String!): Bike!
  }
`;
