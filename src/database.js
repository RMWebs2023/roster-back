const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGODB_URI;

const connection = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(URI, {})
    .then(() => console.log("Database connected!"))
    .catch((error) => console.log(error));
};

module.exports = connection;
