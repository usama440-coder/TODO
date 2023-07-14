const Task = require("../models/Task.model");

const getTasks = async () => {
  return Task.find({});
};

const getTask = async (id) => {
  return Task.findOne({ _id: id });
};

const createTask = async (data) => {
  return Task.create(data);
};

const updateTask = async (id, data) => {
  return Task.updateOne({ _id: id }, data);
};

const deleteTask = async (id) => {
  return Task.deleteOne({ _id: id });
};

const todoService = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

module.exports = todoService;
