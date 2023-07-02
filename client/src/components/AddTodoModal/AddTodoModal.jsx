import { useState } from "react";
import "./AddTodoModal.css";
import { FaTimes } from "react-icons/fa";
import taskService from "../../services/taskService";
import { toast } from "react-hot-toast";

const AddTodoModal = ({ tasks, setAddTaskModal }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await taskService.addTask({ description: task });
      toast.success("Task added successfully");
      tasks.push(res?.data?.task);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Task cannot be added");
    }
    setTask("");
  };

  return (
    <div className="addTodoModalContainer">
      <div className="modalWrapper">
        <FaTimes className="timesIcon" onClick={() => setAddTaskModal(false)} />
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add task"
            value={task}
            name="description"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
