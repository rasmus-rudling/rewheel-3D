import { Bike } from "./models/Bike";

export const resolvers = {
  Query: {
    bikes: async () => await Bike.find(),
  },
  Mutation: {
    addBike: async (_, { color }) => {
      const newBike = new Bike({ color });
      await newBike.save();
      return newBike;
    },
  },
};
