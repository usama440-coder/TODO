import "./AddTodoModal.css";

const AddTodoModal = () => {
  return (
    <div className="addTodoModalContainer">
      <div className="modalWrapper">
        <h3>Add New Task</h3>
        <form>
          <input type="text" placeholder="Add task" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
