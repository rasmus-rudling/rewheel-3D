import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	name: String,
	brand: String,
	grade: Number,
	numReviews: Number,
	price: Number,
	type: String,
});

module.exports = mongoose.model('Product', schema);
