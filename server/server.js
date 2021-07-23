require("dotenv").config();
const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.get("/", (req, res) => res.send("Bravo my life!"));

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`App is running on port ${PORT}`.yellow.bold)
);
