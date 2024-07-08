const mongoose = require('mongoose');

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
	feather: {
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
});

const Piegon = mongoose.model('Pigeon', pigeonSchema);
module.exports = Piegon;
