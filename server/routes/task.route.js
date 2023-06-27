const express = require("express");
const {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");
const taskRouter = express.Router();

taskRouter
  .post("/", addTask)
  .get("/", getTasks)
  .get("/:id", getTask)
  .delete("/:id", deleteTask)
  .put("/:id", updateTask);

module.exports = taskRouter;
