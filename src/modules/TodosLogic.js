import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'task to do number 1',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'task to do number 2',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'task to do number 3',
      completed: false,
    },
  ]);

  
  // handle to-do complete status

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  // delete complete to-do

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  // pass user input

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updateTitle, id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updateTitle,
        };
      }
      return todo;
    }));
  };

  return (
    <div className="todosLogic-style">
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};
export default TodosLogic;
