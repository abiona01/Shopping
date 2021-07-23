const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	image: {},
	name: {
		type: String,
		required: [true, "Please add item name"],
	},
	price: {
		type: Number,
		required: [true, "Please add item price"],
	},
});

module.exports = mongoose.model("Item", ItemSchema);
