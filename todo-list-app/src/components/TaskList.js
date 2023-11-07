

import React, { useState } from 'react';
import Task from './Task';


function TaskList({ title, tasks, onTaskAdd, onTaskComplete }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddClick = () => {
    if (newTaskText) {
      onTaskAdd(newTaskText);
      setNewTaskText('');
    }
  };

  const isCompleted = title === 'Completed'; // Mueve la definición de isCompleted aquí

  return (
    <div className="task-list">
      <h2>{title}</h2>
      <div className="task-list-content">
        <div className="task-list-items">
          {tasks.map((task, index) => {
            const showCompleteButton = !isCompleted && !task.isCompleted; // Muestra el botón solo si no está en "completed" y no se ha completado

            return (
              <Task
                key={index}
                text={task.text}
                onComplete={() => onTaskComplete(index)}
                showCompleteButton={showCompleteButton}
              />
            );
          })}
        </div>
        {!isCompleted && ( 
          <div className="task-list-add">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="New task"
            />
            <button className="add-btn" onClick={handleAddClick}>Add task</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
