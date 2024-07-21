const mongoose = require('mongoose');

const captureSchema = new mongoose.Schema({
	year: Number,
	captures: {
		type: Number,
		default: 0,
	},
});

const pigeonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: false,
		trim: true,
	},
	ring: {
		type: String,
		required: true,
		trim: true,
	},
	birthday: {
		type: Date,
		default: Date.now,
	},
	feather: {
		type: String,
		required: true,
		trim: true,
	},
	gender: {
		type: String,
		required: true,
		trim: true,
	},
	father: {
		type: String,
		required: false,
		trim: true,
	},
	mother: {
		type: String,
		required: false,
		trim: true,
	},
	inCompetition: {
		type: Boolean,
		default: false,
	},
	captures: [captureSchema],
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
});

const Piegon = mongoose.model('Pigeon', pigeonSchema);
module.exports = Piegon;
