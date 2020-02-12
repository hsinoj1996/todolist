const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirm_password: {
    type: String,
    required: true
  }
});

module.exports = Register = mongoose.model("register", registerSchema);
