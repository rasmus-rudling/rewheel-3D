require('dotenv').config()
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
var cors = require('cors')

const url = process.env.MONGODB_URI
const port = process.env.PORT

const startServer = async () => {
	const app = express()

	app.use(cors())

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	})

	await server.start()

	server.applyMiddleware({ app })

	await mongoose
		.connect(url, {
			useNewUrlParser: true,
		})
		.then(() => {
			console.log('Connected to MongoDB.')
		})
		.catch((error) => {
			console.log('Error connecting to MongoDB:', error.message)
		})

	app.listen(port, () =>
		console.log(
			`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
		)
	)
}

startServer()
