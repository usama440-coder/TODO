const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completedTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
