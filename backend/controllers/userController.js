const User = require("../models/userModel");

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" })
        }

        const user = new User({ email, password })
        await user.save();
        res.status(201).json({ message: "User registered successfully", user });
        // res.redirect('/login')
    } catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findAndValidate(email, password);

        if (!foundUser) {
            return res.status(400).json({ message: "Invalid email or password" })
        }

        req.session.user_id = foundUser._id;
        res.status(200).json({ message: "Login successful", user: foundUser });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    };
};

exports.logout = async (req, res) => {
    req.session.destroy(() => {
        res.status(200).json({ message: "Logged out successfully" })
    })
}