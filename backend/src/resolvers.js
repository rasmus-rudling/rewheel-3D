require("dotenv").config();
import { UserInputError, AuthenticationError } from "apollo-server-errors";
import jwt from "jsonwebtoken";
import { Bike } from "./models/Bike";
import User from "./models/User";

const jwt_secret = process.env.JWT_SECRET;


export const resolvers = {
  Query: {
    getCurrentUser: (root, args, context) => {
      return context.currentUser;
    },
    // Should any user be able to query any existing bike with id ? 
    getBike: async (root,_id) =>{

      // Add some error handling here?
      const bike = await Bike.findById(_id)
      return bike
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
    addBike: async (_, { color }, { user }) => {
      try {
        const email = await user;
        // Create new bike.
        const newBike = new Bike({ color });
        await newBike.save();

        // Save new bike to user's list of bikeBuilds.
        currentUser.bikeBuilds.push(newBike);
        await currentUser.save();

        return newBike;
      } catch (e) {
        throw new AuthenticationError("Not authenticated.");
      }
    },
    editBike: async (root, { _id,color }, context) => {   // Can add more inputs to update here color,price ... etc
      // Check if user is logged in.
      const currentUser = context.currentUser;
      if (!currentUser) {
        throw new AuthenticationError("Not authenticated.");
      }
        

      // Implement some error handling here for id? 
      const filter = { _id: _id };
      const update = { color: color}; // Can add more updates here color,price... etc

      const editedBike = await Bike.findOneAndUpdate(filter, update, {
        new: true
      });


      return editedBike;
    },

    deleteBike: async (root, { _id }, context) => {
      // Check if user is logged in.
      const currentUser = context.currentUser;
      if (!currentUser) {
        throw new AuthenticationError("Not authenticated.");
      }

      // Implement some error handling here for id? 
      const deletedBike = await Bike.findByIdAndDelete(_id, {
        new: true
      });
      
      currentUser.bikeBuilds = await currentUser.bikeBuilds.pull(_id)
      currentUser.save()

      return deletedBike
    },


    
  },
};
