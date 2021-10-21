<<<<<<< HEAD
require("dotenv").config();
import { UserInputError, AuthenticationError } from "apollo-server-errors";
import jwt from "jsonwebtoken";
import { Bike } from "./models/Bike";
import User from "./models/User";
import Product from "./models/Product";
=======
require('dotenv').config();
import { UserInputError, AuthenticationError } from 'apollo-server-errors';
import jwt from 'jsonwebtoken';
import Bike from './models/Bike';
import User from './models/User';
import Product from './models/Product';
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de

const jwt_secret = process.env.JWT_SECRET;

export const resolvers = {
  Query: {
    getCurrentUser: async (root, { email }) => {
      const user = (await User.find({ email: email }))[0];

<<<<<<< HEAD
      if (!user) {
        throw new AuthenticationError("Invalid e-mail address.");
      }
      return user;
    },
    getAllUsers: async (root) => {
      const users = await User.find();
      return users;
    },
    // Should any user be able to query any existing bike with id ?
    getBike: async (root, _id) => {
      // Add some error handling here?
      const bike = await Bike.findById(_id);
      return bike;
    },
    getMyBikes: async (root, { email }) => {
      const user = (await User.find({ email: email }))[0];
=======
			if (!user) {
				throw new AuthenticationError('Invalid e-mail address.');
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
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de

      if (!user) {
        throw new AuthenticationError("Invalid e-mail address.");
      }
      return user.bikeBuilds;
    },
    getAllBikes: async () => await Bike.find(),

<<<<<<< HEAD
    getProduct: async (root, _id) => {
      // Add some error handling here?
      const product = await Product.findById(_id);
      return product;
    },
=======
		getProduct: async (root, { product_id }) => {
			const product = (await Product.find({ product_id: product_id }))[0];
			console.log('Fetching product', product);

			return product;
		},
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de

    getAllProducts: async () => await Product.find(),
  },
  Mutation: {
    createUser: async (
      root,
      { email, username, firstName, lastName, imgUrl }
    ) => {
      const user = new User({ email, username, firstName, lastName, imgUrl });

<<<<<<< HEAD
      return await user.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: { email, username, firstName, lastName, imgUrl },
        });
      });
    },
    addBike: async (_, { email, products, createdBy }) => {
      const user = (await User.find({ email: email }))[0];
=======
			return await user.save().catch((error) => {
				throw new UserInputError(error.message, {
					invalidArgs: { email, username, firstName, lastName, imgUrl },
				});
			});
		},
		addBike: async (_, { email, products, createdBy, createdAt }) => {
			const user = (await User.find({ email: email }))[0];
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de

      if (!user) {
        throw new AuthenticationError("Invalid e-mail address.");
      }

<<<<<<< HEAD
      console.log(user);

      // Create new bike.
      const newBike = new Bike({
        products: products,
        createdBy: createdBy,
        // createdAt: createdBike.createdAt,
      });
=======
			// Create new bike.
			const newBike = new Bike({
				products: products,
				createdBy: createdBy,
				createdAt: createdAt,
			});
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de

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
