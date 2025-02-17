const mongoose = require('mongoose');

const TranscationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    type: {
        type: String,
        enum: ["Income", "Expense"],
        required: [true, "Type is required"]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    note: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", TranscationSchema);

module.exports = Transaction;
