

// import React from 'react';

// function Task({ text, onComplete, showCompleteButton }) {
//   return (
//     <div className="task">
//       <span>{text}</span>
//       <button
//         className={`task-complete-button ${showCompleteButton ? '' : 'Completed'}`}
//         onClick={onComplete}
//       >
//         Complete
//       </button>
//     </div>
//   );
// }

// export default Task;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function Task({ text, onComplete, onRemove, showCompleteButton }) {
  return (
    <div className="task">
      <span>{text}</span>
      <button
        className={`task-complete-button ${showCompleteButton ? '' : 'Completed'}`}
        onClick={onComplete}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      {showCompleteButton && (
        <button className="task-remove-button" onClick={onRemove}>
          <FontAwesomeIcon icon={faTrash} /> 
        </button>
      )}
    </div>
  );
}

export default Task;

