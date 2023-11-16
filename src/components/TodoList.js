
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const CongratulationsMessage = () => (
  <div className="congratulations-message">
    <p>Congratulations on completing your task!!!</p>
  </div>
);

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const addTodo = (text, status, dueDate) => {
    const newTodo = { text, status, dueDate };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    const currentStatus = updatedTodos[index].status;
    const statusOrder = ['to-do', 'doing', 'code-review', 'test', 'done'];
    const currentIndex = statusOrder.indexOf(currentStatus);

    if (currentIndex < statusOrder.length - 1) {
      updatedTodos[index].status = statusOrder[currentIndex + 1];
      setTodos(updatedTodos);

      if (statusOrder[currentIndex + 1] === 'done') {
    
        setShowCongratulations(true);

        
        setTimeout(() => {
          setShowCongratulations(false);
        }, 10000);
      } 
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <div className="todo-list">
      <div className="todo-form-with-calendar">
        <TodoForm addTodo={addTodo} />
        <div className="calendar">
          <div
            className="calendar-icon"
            onClick={toggleCalendarVisibility}
          >
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          {isCalendarVisible && (
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={({ date }) => (
                <div>
                  {todos
                    .filter((todo) => todo.dueDate === date.toISOString().split('T')[0])
                    .map((todo, index) => (
                      <div key={index}>{todo.text}</div>
                    ))}
                </div>
              )}
            />
          )}
        </div>
      </div>
      <div className="status-block toDo-block">
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
      <div className="status-block doing-block">
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
      <div className="status-block code-block">
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
      <div className="status-block test-block">
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
      <div className="status-block done-block">
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
        {showCongratulations && <CongratulationsMessage />}
      </div>
    </div>
  );
};

export default TodoList;
