import PropTypes from "prop-types";
import ListItem from "./ListItem";

const ListGroup = ({ todos, removeTodo, editTodo }) => {
  // Prop validation using PropTypes
  ListGroup.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
  };

  return (
    <ul className="list-group my-2">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
