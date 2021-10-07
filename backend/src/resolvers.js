require("dotenv").config();
import { UserInputError, AuthenticationError } from "apollo-server-errors";
import jwt from "jsonwebtoken";
import { Bike } from "./models/Bike";
import User from "./models/User";

const jwt_secret = process.env.JWT_SECRET;



// add  Edit Bike and Delete Bike 


export const resolvers = {
  Query: {
    getCurrentUser: (root, args, context) => {
      return context.currentUser;
    },
    getMyBikes: async (root, args, context) => {
      // Check if user is logged in.
      const currentUser = context.currentUser;
      if (!currentUser) {
        throw new AuthenticationError("Not authenticated.");
      }
      return currentUser.bikeBuilds;
    },
    getAllBikes: async () => await Bike.find(),
  },
  Mutation: {
    createUser: async (root, args) => {
      const user = new User({ ...args });

      return await user.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      });
    },
    login: async (root, args) => {
      const user = await User.findOne({
        username: args.username,
        password: args.password,
      });

      if (!user) {
        throw new UserInputError("Wrong login credentials.");
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      return { value: jwt.sign(userForToken, jwt_secret) };
    },
    addBike: async (root, { color }, context) => {
      // Check if user is logged in.
      const currentUser = context.currentUser;
      if (!currentUser) {
        throw new AuthenticationError("Not authenticated.");
      }

      // Create new bike.
      const newBike = new Bike({ color });
      await newBike.save();

      // Save new bike to user's list of bikeBuilds.
      currentUser.bikeBuilds.push(newBike);
      await currentUser.save();

      return newBike;
    },
  },
};
