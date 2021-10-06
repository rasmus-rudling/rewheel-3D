import { Bike } from "./models/Bike";
import { User } from ".models/User";

export const resolvers = {
  Query: {
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
    addBike: async (_, { color }) => {
      const newBike = new Bike({ color });
      await newBike.save();
      return newBike;
    },
  },
};
