

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('to-do');
  const [dueDate, setDueDate] = useState(new Date()); // Agrega el estado de la fecha

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text, status, dueDate.toISOString().split('T')[0]);
      setText('');
      setDueDate(new Date());
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
      {/* Usa el componente DatePicker en lugar de un campo de entrada de texto para la fecha */}
      <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
      <button className="add-btn" onClick={handleAddTodo}>
        Add Task
      </button>
    </div>
  );
};

export default TodoForm;

