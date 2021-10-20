import mongoose from 'mongoose';
// import uniqueValidator from "mongoose-unique-validator";

const schema = new mongoose.Schema({
	firstName: {
		type: String,
		required: false,
		unique: false,
	},
	lastName: {
		type: String,
		required: false,
		unique: false,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	imgUrl: {
		type: String,
		required: false,
		unique: false,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	bikeBuilds: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Bike',
		},
	],
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

schema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// schema.plugin(uniqueValidator);
module.exports = mongoose.model('User', schema);
