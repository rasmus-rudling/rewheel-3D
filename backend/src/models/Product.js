import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	product_id: String,
	name: String,
	brand: String,
	grade: Number,
	numReviews: Number,
	price: Number,
	type: String,
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

module.exports = mongoose.model('Product', schema);

