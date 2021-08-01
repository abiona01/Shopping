const Item = require("../models/Item");

const getAllItems = async (req, res) => {
	try {
		const items = await Item.find({});
		res.status(200).json(items);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

const getItemById = async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);
		res.status(200).json(item);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

module.exports = {
	getAllItems,
	getItemById,
};
