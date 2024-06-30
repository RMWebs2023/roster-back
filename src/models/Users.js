const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  // name, lastname, email, password, team, company, document, birthdate, image
});

module.exports = model("users", UsersSchema);