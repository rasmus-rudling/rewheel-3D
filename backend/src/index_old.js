require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
var cors = require("cors");

const url = process.env.MONGODB_URI;
const port = process.env.PORT;
const jwks_url = process.env.JWKS_URL;
const auth0_client_id = process.env.AUTH0_CLIENT_ID;
const auth0_domain = process.env.AUTH0_DOMAIN;
const auth0_api_id = process.env.AUTH0_API_ID;

// source: https://www.youtube.com/watch?v=GGGjnBkN8xk
// const verifyJwt = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: jwks_url,
//   }),
//   audience: auth0_api_id,
//   issuer: auth0_domain,
//   algorithms: ["RS256"],
// });

// source: https://dev.to/hasone/authenticate-jwt-token-in-apollo-server-express-2172
// const authTest = (request) => {
//   const header = request.req.headers.authorization;

//   // not found
//   if (!header) return { isAuth: false };

//   // token
//   const token = header.split(" ");

//   // token not found
//   if (!token) return { isAuth: false };

//   let decodeToken;

//   try {
//     decodeToken = jwt.verify(token[1], privateKey);
//   } catch (err) {
//     return { isAuth: false };
//   }

//   // in case any error found
//   if (!!!decodeToken) return { isAuth: false };

//   // token decoded successfully, and extracted data
//   return { isAuth: true, userId: decodeToken.userId };
// };

const startServer = async () => {
  const client = jwksClient({
    jwksUri: jwks_url,
  });

  function getKey(header, cb) {
    client.getSigningKey(header.kid, function (err, key) {
      var signingKey = key.publicKey || key.rsaPublicKey;
      cb(null, signingKey);
    });
  }

  const options = {
    audience: auth0_client_id,
    issuer: auth0_domain,
    algorithms: ["RS256"],
  };

  const app = express();

  app.use(cors());
  // app.use(verifyJwt);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      // Authorization check on every request.
      const token = req.headers.authorization;

      if (!token) {
        return console.log("Token not found :(");
      }

      const user = new Promise((resolve, reject) => {
        jwt.verify(token, getKey, options, (err, decoded) => {
          if (err) {
            return reject(err);
          }
          resolve(decoded.email);
        });
      }).catch((err) => {
        // return res.status(400).send(`Token error: ${err}`);
        return console.log(`Token error :(( ${err}`);
      });

      return {
        user,
      };
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
