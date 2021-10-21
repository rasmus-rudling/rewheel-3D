require("dotenv").config();
import { UserInputError, AuthenticationError } from "apollo-server-errors";
import jwt from "jsonwebtoken";
import Bike from "./models/Bike";
import User from "./models/User";
import Product from "./models/Product";

const jwt_secret = process.env.JWT_SECRET;

export const resolvers = {
  Query: {
    getCurrentUser: async (root, { email }) => {
      const user = (await User.find({ email: email }))[0];

      if (!user) {
        throw new AuthenticationError("Invalid e-mail address.");
      }
      return user;
    },
    // Should any user be able to query any existing bike with id ?
    getBike: async (root, id) => {
      // Add some error handling here?
      const bike = await Bike.findById(id);
      return bike;
    },
    getMyBikes: async (root, { email }) => {
      const user = (await User.find({ email: email }))[0];

      if (!user) {
        throw new AuthenticationError("Invalid e-mail address.");
      }
      return await Bike.find({ _id: { $in: user.bikeBuilds } });
    },
    getAllBikes: async () => await Bike.find(),

    getProduct: async (root, { product_id }) => {
      const product = (await Product.find({ product_id: product_id }))[0];
      console.log("Fetching product", product);

      return product;
    },

    getAllProducts: async () => await Product.find(),
  },
  Mutation: {
    createUser: async (
      root,
      { email, username, firstName, lastName, imgUrl }
    ) => {
      // Check if user already exists.
      const user = (await User.find({ email: email }))[0];
      if (user) {
        throw new UserInputError("User already exists.");
      }

      const newUser = new User({
        email,
        username,
        firstName,
        lastName,
        imgUrl,
      });

      return await newUser.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: { email, username, firstName, lastName, imgUrl },
        });
      });
    },
    addBike: async (_, { email, products, createdBy, createdAt }) => {
      const user = (await User.find({ email: email }))[0];

      if (!user) {
        throw new AuthenticationError("Invalid e-mail address.");
      }

      // Create new bike.
      const newBike = new Bike({
        products: products,
        createdBy: createdBy,
        createdAt: createdAt,
      });

      await newBike.save();

      // Save new bike to user's list of bikeBuilds.
      user.bikeBuilds.push(newBike);
      await user.save();

      return newBike;
    },
    addProduct: async (root, args) => {
      const product = new Product({ ...args });

      return await product.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      });
    },
  },
};
