import http from "../http-common";

const getTasks = () => {
  return http.get("/task");
};

const taskService = {
  getTasks,
};

export default taskService;
