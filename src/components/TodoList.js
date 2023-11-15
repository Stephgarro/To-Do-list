


// TodoList.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, status) => {
    const newTodo = { text, status };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    const currentStatus = updatedTodos[index].status;

    // Define el orden de los bloques
    const statusOrder = ['to-do', 'doing', 'code-review', 'test', 'done'];

    // Encuentra el índice actual en el orden de los bloques
    const currentIndex = statusOrder.indexOf(currentStatus);

    // Mueve la tarea al siguiente bloque si no está en 'done'
    if (currentIndex < statusOrder.length - 1) {
      updatedTodos[index].status = statusOrder[currentIndex + 1];
      setTodos(updatedTodos);
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
         <TodoForm addTodo={addTodo} />
      <div className="status-block">
        <h2>To-Do</h2>
        <div className="todo-items">
          {todos
            .filter((todo) => todo.status === 'to-do')
            .map((todo, index) => (
              <TodoItem
                key={index}
                index={todos.indexOf(todo)}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
        </div>
      </div>
      <div className="status-block">
        <h2>Doing</h2>
        <div className="todo-items">
          {todos
            .filter((todo) => todo.status === 'doing')
            .map((todo, index) => (
              <TodoItem
                key={index}
                index={todos.indexOf(todo)}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
        </div>
      </div>
      <div className="status-block">
        <h2>Code Review</h2>
        <div className="todo-items">
          {todos
            .filter((todo) => todo.status === 'code-review')
            .map((todo, index) => (
              <TodoItem
                key={index}
                index={todos.indexOf(todo)}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
        </div>
      </div>
      <div className="status-block">
        <h2>Test</h2>
        <div className="todo-items">
          {todos
            .filter((todo) => todo.status === 'test')
            .map((todo, index) => (
              <TodoItem
                key={index}
                index={todos.indexOf(todo)}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
        </div>
      </div>
      <div className="status-block">
        <h2>Done</h2>
        <div className="todo-items">
          {todos
            .filter((todo) => todo.status === 'done')
            .map((todo, index) => (
              <TodoItem
                key={index}
                index={todos.indexOf(todo)}
                todo={todo}
                removeTodo={removeTodo}
              />
            ))}
        </div>
      </div>
     
    </div>
  );
};

export default TodoList;






