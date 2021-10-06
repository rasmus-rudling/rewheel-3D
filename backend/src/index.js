require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import User from "./models/User";

const url = process.env.MONGODB_URI;
const port = process.env.PORT;
const jwt_secret = process.env.JWT_SECRET;

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const auth = req ? req.headers.authorization : null;
      if (auth && auth.toLowerCase().startsWith("bearer ")) {
        const decodedToken = jwt.verify(auth.substring(7), jwt_secret);
        const currentUser = await User.findById(decodedToken.id);
        return { currentUser };
      }
    },
  });

  await server.start();

  server.applyMiddleware({ app });

  await mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB:", error.message);
    });

  app.listen(port, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

startServer();
