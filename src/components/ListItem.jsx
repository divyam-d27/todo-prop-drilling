import PropTypes from "prop-types";

const ListItem = ({ todo, removeTodo, editTodo }) => {
  // Prop validation using PropTypes
  ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
  };

  return (
    <li className="list-group-item rounded-0">
      {todo.text}
      <span className="float-end">
        <button
          className="mx-1 btn btn-warning btn-sm rounded-0"
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>
        <button
          className="mx-1 btn btn-danger btn-sm rounded-0"
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
