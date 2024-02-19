const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB CONNECTED".cyan.underline);
  } catch (e) {
    console.log(e.message);
    process.exit();
  }
};

module.exports = connectDB;
