require('dotenv').config();
const express = require('express');
const colors = require('colors');
var cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./route/itemRoutes');

connectDB();
const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Bravo my life!'));

app.use(express.json());
app.use('/api/products', itemRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`.yellow.bold)
);
