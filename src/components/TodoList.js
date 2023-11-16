


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

    const statusOrder = ['to-do', 'doing', 'code-review', 'test', 'done'];

  
    const currentIndex = statusOrder.indexOf(currentStatus);


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
      </div>
     
    </div>
  );
};

export default TodoList;




// // TodoList.js
// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import TodoItem from './TodoItem';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [completedTaskIndex, setCompletedTaskIndex] = useState(null);

//   const addTodo = (text, status) => {
//     const newTodo = { text, status };
//     setTodos([...todos, newTodo]);
//     setCompletedTaskIndex(null); // Reiniciar el mensaje cuando se agrega una nueva tarea
//   };

//   const completeTodo = (index) => {
//     const updatedTodos = [...todos];
//     const currentStatus = updatedTodos[index].status;

//     const statusOrder = ['to-do', 'doing', 'code-review', 'test', 'done'];
//     const currentIndex = statusOrder.indexOf(currentStatus);

//     if (currentIndex < statusOrder.length - 1) {
//       updatedTodos[index].status = statusOrder[currentIndex + 1];
//       setTodos(updatedTodos);

//       if (statusOrder[currentIndex + 1] === 'done') {
//         setCompletedTaskIndex(index); // Almacenar el índice de la tarea completada
//       } else {
//         setCompletedTaskIndex(null); // Reiniciar el índice cuando se mueve a otro bloque
//       }
//     }
//   };

//   const removeTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//     setCompletedTaskIndex(null); // Reiniciar el mensaje cuando se elimina una tarea
//   };

//   return (
//     <div className="todo-list">
//       <TodoForm addTodo={addTodo} />
//       <div className="status-block toDo-block">
//         <h2>To-Do</h2>
//         <div className="todo-items">
//           {todos
//             .filter((todo) => todo.status === 'to-do')
//             .map((todo, index) => (
//               <TodoItem
//                 key={index}
//                 index={index}
//                 todo={todo}
//                 completeTodo={completeTodo}
//                 removeTodo={removeTodo}
//               />
//             ))}
//         </div>
//       </div>
//       <div className="status-block doing-block">
//         <h2>Doing</h2>
//         <div className="todo-items">
//           {todos
//             .filter((todo) => todo.status === 'doing')
//             .map((todo, index) => (
//               <TodoItem
//                 key={index}
//                 index={index}
//                 todo={todo}
//                 completeTodo={completeTodo}
//                 removeTodo={removeTodo}
//               />
//             ))}
//         </div>
//       </div>
//       <div className="status-block code-block">
//         <h2>Code Review</h2>
//         <div className="todo-items">
//           {todos
//             .filter((todo) => todo.status === 'code-review')
//             .map((todo, index) => (
//               <TodoItem
//                 key={index}
//                 index={index}
//                 todo={todo}
//                 completeTodo={completeTodo}
//                 removeTodo={removeTodo}
//               />
//             ))}
//         </div>
//       </div>
//       <div className="status-block test-block">
//         <h2>Test</h2>
//         <div className="todo-items">
//           {todos
//             .filter((todo) => todo.status === 'test')
//             .map((todo, index) => (
//               <TodoItem
//                 key={index}
//                 index={index}
//                 todo={todo}
//                 completeTodo={completeTodo}
//                 removeTodo={removeTodo}
//               />
//             ))}
//         </div>
//       </div>
//       <div className="status-block done-block">
//         <h2>Done</h2>
//         <div className="todo-items">
//           {todos
//             .filter((todo) => todo.status === 'done')
//             .map((todo, index) => (
//               <TodoItem
//                 key={index}
//                 index={index}
//                 todo={todo}
//                 completedTaskIndex={completedTaskIndex}
//                 removeTodo={removeTodo}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;




