import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    imgUrl: String
    bikeBuilds: [String]!
  }
  type Token {
    value: String!
  }
  type Bike {
    id: ID!
    products: [String]
    createdBy: String
  }
  type Product {
    id: ID!
    name: String!
    brand: String!
    grade: Int!
    numReviews: Int!
    price: Float!
    type: String!
  }

  type Query {
    getCurrentUser(email: String!): User
    getAllUsers: [User]
    getBike(_id: ID!): Bike!
    getMyBikes(email: String!): [Bike]!
    getAllBikes: [Bike!]!
    getProduct(_id: ID!): Product!
    getAllProducts: [Product!]!
  }
  type Mutation {
    createUser(
      email: String!
      username: String!
      firstName: String
      lastName: String
      imgUrl: String
    ): User
    addBike(email: String!, products: [String]!, createdBy: String!): Bike!
    editBike(email: String!, _id: ID!, color: String!): Bike!
    deleteBike(email: String!, _id: ID!): Bike!
    addProduct(
      modelSrc: String!
      name: String!
      brand: String!
      grade: Int!
      numReviews: Int!
      price: Float!
      imgLink: String!
      type: String!
    ): Product
  }
`;
