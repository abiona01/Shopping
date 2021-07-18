const express = require("express");
const colors = require("colors");
const app = express();

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
