const mongoose = require("mongoose");

const linkmodel = new mongoose.Schema({
  link: {
    type: String,
    required: [true, "please enter the valid Link"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("link", linkmodel);
