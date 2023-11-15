// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('to-do');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text, status);
      setText('');
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default TodoForm;



