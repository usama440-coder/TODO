import "./home.css";
import { useState, useEffect } from "react";
import { FaBars, FaAngleDown } from "react-icons/fa6";
import Todo from "../../components/Todo/Todo";
import taskService from "../../services/taskService";
import AddTodoModal from "../../components/AddTodoModal/AddTodoModal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [addTaskModal, setAddTaskModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await taskService.getTasks();
        setTasks(res?.data?.tasks || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homeContainer">
      <img src="/img/user.avif" alt="avatar" width="60" />

      <div className="homeHeader">
        <FaBars className="icon" onClick={() => setAddTaskModal(true)} />
        <p>Your todos</p>
        <FaAngleDown className="icon" />
      </div>

      {addTaskModal ? (
        <AddTodoModal tasks={tasks} setAddTaskModal={setAddTaskModal} />
      ) : (
        ""
      )}

      <div className="todoList">
        {tasks?.map((task) => {
          return <Todo key={task?._id} todo={task} setTasks={setTasks} />;
        })}
      </div>
    </div>
  );
};

export default Home;
