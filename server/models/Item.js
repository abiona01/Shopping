const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
	},
	imageUrl: {
		type: String,
		requried: true,
	},
});

module.exports = mongoose.model("Item", ItemSchema);
