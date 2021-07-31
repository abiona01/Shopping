const Item = require("../models/Item");

const getAllItems = async () => {
	try {
		const items = await Item.find({});
		res.status(200).json(items);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

const getItemById = async () => {
	try {
		const items = await Item.find(req.params.id);
		res.status(200).json(items);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

module.exports = {
	getAllItems,
	getItemById,
};
