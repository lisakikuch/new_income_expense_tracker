require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');

const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("MONGO_URI is missing! Please check your .env file.");
    process.exit(1);
}

connectDB(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    });

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use secure; true in production with HTTPS
}))

app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running! Welcome to the Expense/Income Tracker.');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});