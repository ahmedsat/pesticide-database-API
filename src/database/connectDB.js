const moongose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const conn = await moongose.connect(process.env.MONGO_URI);
  // conn.connection.on("error", (err) => {
  //   console.error(err);
  //   process.exit(1);
  // });
  // conn.connection.on("open", () => {
  //   console.log("Connected to MongoDB");
  // });
  // console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
