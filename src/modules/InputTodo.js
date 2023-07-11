import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  // create a state for user input

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // handle function to update todos state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
      alert('Please add item');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="add to-do. . ."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button
          type="submit"
          className="input-submit"
        >
          Add
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
export default InputTodo;
