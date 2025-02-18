const { default: mongoose } = require("mongoose");

const connectDB = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MONGO CONNECTION OPEN!!");
    } catch (err) {
        console.error("MONGO CONNECTION ERROR", err);
        process.exit(1);
    }
};

module.exports = connectDB;