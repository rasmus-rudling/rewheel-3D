require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { verifyToken } from "./verifyToken";
var cors = require("cors");

const url = process.env.MONGODB_URI;
const port = process.env.PORT;

const startServer = async () => {
  const app = express();

  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      let isAuthenticated = false;

      try {
        const authHeader =
          req.headers.authorization || "No-authorization-header";
        if (authHeader) {
          let token;

          if (authHeader !== "No-authorization-header") {
            token = authHeader.split(" ")[1];
          } else {
            token = undefined;
          }

          const payload = await verifyToken(token);
          isAuthenticated = payload && payload.sub ? true : false;
          // Get the user from db.
          if (isAuthenticated) {
            console.log(payload);
          } else {
            console.log("Is not logged in");
          }
        }
      } catch (error) {
        console.log("PE1");
        console.log();
      }

      return { ...res, req, auth: { user, isAuthenticated } };
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
