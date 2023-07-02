const asyncHandler = require("express-async-handler");
const Task = require("../models/Task.model");

// @desc    Add a task
// @route   POST /api/v1/task
const addTask = asyncHandler(async (req, res) => {
  const { description } = req.body;

  // check required field
  if (!description) {
    res.status(400);
    throw new Error("Enter task description");
  }

  // description length
  if (description.length < 5) {
    res.status(400);
    throw new Error("Length should be atleast 5 characters");
  }

  const task = await Task.create({
    description,
  });

  res.status(201).json({ success: true, task });
});

// @desc    Get all tasks
// @route   GET /api/v1/task
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ success: true, tasks });
});

// @desc    Get a single task
// @route   GET /api/v1/task/:id
const getTask = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  const task = await Task.findOne({ _id });

  // task not exists
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  res.status(200).json({ task });
});

// @desc    Update a task
// @route   PUT /api/v1/task/:id
const updateTask = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { description, completed, completedTime } = req.body;

  // task exists
  const taskExists = await Task.findOne({ _id });
  if (!taskExists) {
    res.status(404);
    throw new Error("Task does not exist");
  }

  // description length
  if (description && description.length < 5) {
    res.status(400);
    throw new Error("Length should be atleast 5 characters");
  }

  await Task.updateOne({ _id }, { description, completed, completedTime });

  res.status(200).json({ success: true, message: "Task updated successfully" });
});

// @desc    Delete a task
// @route   DELETE /api/v1/task/:id
const deleteTask = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  // task exists
  const taskExists = await Task.findOne({ _id });
  if (!taskExists) {
    res.status(400);
    throw new Error("Task does not exist");
  }

  await Task.deleteOne({ _id });

  res.status(200).json({ success: true, message: "Task deleted successfully" });
});

module.exports = {
  addTask,
  getTask,
  getTasks,
  deleteTask,
  updateTask,
};
