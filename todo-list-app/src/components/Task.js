// import React from 'react';

// function Task({ text, onComplete }) {
//   return (
//     <div className="task">
//       <span>{text}</span>
//       <button onClick={onComplete}>Completar</button>
//     </div>
//   );
// }

// export default Task;


import React from 'react';

function Task({ text, onComplete, showCompleteButton }) {
  return (
    <div className="task">
      <span>{text}</span>
      <button
        className={`task-complete-button ${showCompleteButton ? '' : 'Completed'}`}
        onClick={onComplete}
      >
        Complete
      </button>
    </div>
  );
}

export default Task;

