require("dotenv").config();
const itemsData = require("./data/items");
const connectDB = require("./config/db");
const Item = require("./models/Item");

connectDB();

const importData = async () => {
	try {
		await Item.deleteMany({});
		await Item.insertMany(itemsData);

		console.log("Data import success");
		process.exit();
	} catch (error) {
		console.error("Error with Data import");
		process.exit(1);
	}
};

importData();
