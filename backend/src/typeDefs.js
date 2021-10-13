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
  type Product {
    id: ID!
    modelSrc: String!
    name: String!
    brand: String!
    grade: Int!
    numReviews: Int!
    price: Float!
    imgLink: String!
    type: String!
  }
  type Query {
    getCurrentUser: User
    getBike(_id: ID!): Bike!
    getMyBikes: [Bike]!
    getAllBikes: [Bike!]!
    getProduct(_id: ID!): Product!
    getAllProducts: [Product!]!
  }
  type Mutation {
    createUser(username: String!, password: String!): User
    login(username: String!, password: String!): Token
    addBike(color: String!): Bike!
    editBike(_id: ID!, color: String!): Bike!
    deleteBike(_id: ID!): Bike!
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
