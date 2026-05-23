const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: [true, "Please enter the task title"],
    trim: true,
    minlength: 3
  },

  description: {
    type: String,
    maxlength: 500
  },

  status: {
    type: String,
    enum: [
      "Pending",
      "In Progress",
      "Completed"
    ],
    default: "Pending"
  },

  dueDate: {
    type: Date,
    required: true
  }

}, {
  timestamps: true
});

module.exports =
  mongoose.model("Task", taskSchema);
  