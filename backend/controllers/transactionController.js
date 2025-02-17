const Transaction = require('../models/transactionModel');

// Perform CRUD operations:

// Create a new transaction
exports.createTransaction = async (req, res) => {

    try {
        const { userID, type, amount, category, date, note } = req.body;
        const transaction = new Transaction({ userID, type, amount, category, date, note });
        await transaction.save();

        res.status(201).json(transaction);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all transactions
exports.getTransactions = async (req, res) => {

    try {
        const transactions = await Transaction.find();

        res.status(200).json(transactions);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a transaction
exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const updateTransaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(updateTransaction);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        await Transaction.findByIdAndDelete(id);

        res.status(200).json({ message: "Transaction deleted" });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};