require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

connectDB(MONGO_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Expense/income Tracker!')
});

app.listen(PORT, () => {
    console.log(`APP IS LISTENING TO PORT ${PORT}!`)
});