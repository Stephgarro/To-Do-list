
// // TodoItem.js
// import React from 'react';

// const TodoItem = ({ index, todo, removeTodo, completeTodo }) => {
//   return (
//     <div className={`todo-item ${todo.status}`} key={index}>
//       <span>{todo.text}</span>
//       <button onClick={() => completeTodo(index)}>Completado</button>
//       <button onClick={() => removeTodo(index)}>Eliminar</button>
//     </div>
//   );
// };

// export default TodoItem;


// TodoItem.js
import React from 'react';

const TodoItem = ({ index, todo, completeTodo, removeTodo }) => {
  return (
    <div className={`todo-item ${todo.status}`} key={index}>
      <span>{todo.text}</span>
      {todo.status !== 'done' && (
        <button onClick={() => completeTodo(index)}>Complete</button>
      )}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;




