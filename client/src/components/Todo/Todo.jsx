import "./Todo.css";
import { PiDotsSixVerticalBold } from "react-icons/pi";

const Todo = ({ todo }) => {
  return (
    <div className="todoListItem">
      <input type="checkbox" checked={todo.completed} />
      <p>{todo.description}</p>
      <PiDotsSixVerticalBold className="icon" />
    </div>
  );
};

export default Todo;
