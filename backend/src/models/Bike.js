import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	products: [String],
	createdBy: String,
	// createdAt: Date,
});

export const Bike = mongoose.model('Bike', schema);
