const mongoose = require("mongoose");

const newsmModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: [true, "please enter thedescription"],
  },
  from: {
    type: Date,
    required: [true, "please enter Date"],
  },
  to: {
    type: Date,
    required: [true, "please enter Date"],
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("news", newsmModel);
