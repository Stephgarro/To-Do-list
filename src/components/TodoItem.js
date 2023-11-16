


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoItem = ({ index, todo, completeTodo, removeTodo }) => {
  return (
    <div className={`todo-item ${todo.status}`} key={index}>
      <span>{todo.text}</span>
      <span>Due Date: {todo.dueDate}</span>
      {todo.status !== 'done' && (
        <button onClick={() => completeTodo(index)}>
          <FontAwesomeIcon icon={faCheck} /> Complete
        </button>
      )}
      <button onClick={() => removeTodo(index)}>
        <FontAwesomeIcon icon={faTrash} /> 
      </button>
    </div>
  );
};


export default TodoItem;









