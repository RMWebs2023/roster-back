const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  team: ObjectId,
  company: String,
  document: Number,
  birthdate: Date,
  image: String,
});

module.exports = model("users", UsersSchema);
