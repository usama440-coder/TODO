import { useState } from "react";
import "./Todo.css";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import taskService from "../../services/taskService";
import { toast } from "react-hot-toast";

const Todo = ({ todo, setTasks }) => {
  const [checked, setChecked] = useState(todo?.completed);

  // function to handle delete operation
  const handleDelete = async () => {
    try {
      await taskService.deleteTask(todo?._id);
      setTasks((prev) => prev.filter((data) => data?._id !== todo?._id));
      toast.success("Task deleted sucessfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Cannot be deleted");
    }
  };

  // handle update call to server
  const handleChange = async (e) => {
    try {
      setChecked(e.target.checked);
      await taskService.updateTask(todo?._id, {
        completed: e.target.checked,
        completedTime: new Date(),
      });
      toast.success("Task updated successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Cannot be updated");
    }
    setChecked(e.target.checked);
  };

  return (
    <div className="todoListItem">
      <label className="checkBoxContainer">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="checkmark"></span>
      </label>
      <p>{todo?.description}</p>
      <PiDotsSixVerticalBold className="icon" onClick={handleDelete} />
    </div>
  );
};

export default Todo;
