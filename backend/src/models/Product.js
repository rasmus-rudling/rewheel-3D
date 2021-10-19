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

module.exports = mongoose.model('Product', schema);
