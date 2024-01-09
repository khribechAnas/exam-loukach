const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter the password"],
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },
},
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
