require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3001;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/incomeExpenseTracker';

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR.")
    })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Expense/income Tracker!')
})

app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`APP IS LISTENING TO PORT ${PORT}!`)
})