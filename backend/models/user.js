const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;