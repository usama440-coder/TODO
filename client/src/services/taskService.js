import http from "../http-common";

const getTasks = () => {
  return http.get("/task");
};

const addTask = (task) => {
  return http.post("/task", task);
};

const updateTask = (id, task) => {
  return http.put(`/task/${id}`, task);
};

const deleteTask = (id) => {
  return http.delete(`/task/${id}`);
};

const taskService = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};

export default taskService;
