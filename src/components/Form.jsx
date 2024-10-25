import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Form = ({ addTodo, edit, updateTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEditing ? updateTodo(text) : addTodo(text);
    setText("");
  };

  useEffect(() => {
    edit.isEditing && setText(edit.edit.text);
  }, [edit.isEditing, edit.edit]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Text"
        className="form-control rounded-0"
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
      />
      <button className="btn btn-success w-100 my-3 rounded-0">Save</button>
    </form>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
  edit: PropTypes.shape({
    isEditing: PropTypes.bool.isRequired,
    edit: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
  }),
  updateTodo: PropTypes.func.isRequired,
};

export default Form;
