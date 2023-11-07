


// import React, { useState } from 'react';
// import TaskList from './components/TaskList';
// import { DragDropContext } from 'react-beautiful-dnd';
// import './App.css'; // Importa tu archivo CSS

// function App() {
//   const [tasks, setTasks] = useState({
//     Design: [],
//     InProgress: [],
//     CodeReview: [],
//     Testing: [],
//     Completed: [],
//   });

//   const [showCongratulations, setShowCongratulations] = useState(false); // Nuevo estado para mostrar el mensaje
//   const [completedTasks, setCompletedTasks] = useState({}); // Estado para rastrear tareas completadas

//   const handleTaskAdd = (text, category) => {
//     if (category !== 'Completed') {
//       const newTask = { text, category };
//       setTasks((prevTasks) => ({
//         ...prevTasks,
//         [category]: [...prevTasks[category], newTask],
//       }));
//     }
//   };

//   const handleTaskComplete = (sourceCategory, index) => {
//     const completedTask = tasks[sourceCategory][index];
//     const nextCategory = getNextCategory(sourceCategory);

//     if (nextCategory === 'Completed') {
//       setCompletedTasks((prevCompletedTasks) => ({
//         ...prevCompletedTasks,
//         [completedTask.text]: true,
//       }));
//     }

//     setTasks((prevTasks) => {
//       const updatedTasks = { ...prevTasks };
//       updatedTasks[sourceCategory] = prevTasks[sourceCategory].filter((task, i) => i !== index);
//       updatedTasks[nextCategory] = [...prevTasks[nextCategory], completedTask];
//       return updatedTasks;
//     });
//   };

//   const getNextCategory = (currentCategory) => {
//     switch (currentCategory) {
//       case 'Design':
//         return 'InProgress';
//       case 'InProgress':
//         return 'CodeReview';
//       case 'CodeReview':
//         return 'Testing';
//       case 'Testing':
//         return 'Completed';
//       default:
//         return 'Completed';
//     }
//   };

//   const handleShowCongratulations = () => {
//     setShowCongratulations(false); // Restablece el estado
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) {
//       return;
//     }

//     const draggedTask = tasks[source.droppableId][source.index];

//     setTasks((prevTasks) => {
//       const updatedTasks = { ...prevTasks };
//       updatedTasks[source.droppableId].splice(source.index, 1);
//       updatedTasks[destination.droppableId].splice(destination.index, 0, draggedTask);
//       return updatedTasks;
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <DragDropContext onDragEnd={onDragEnd}>
//         {Object.keys(tasks).map((category) => (
//           <TaskList
//             key={category}
//             title={category}
//             tasks={tasks[category]}
//             onTaskAdd={(text) => handleTaskAdd(text, category)}
//             onTaskComplete={(index) => handleTaskComplete(category, index)}
//             completedTasks={completedTasks}
//           />
//         ))}
//       </DragDropContext>

//       {showCongratulations && (
//         <div className="congratulations-message">
//           <p>¡Felicidades por completar tu tarea!</p>
//           <button onClick={handleShowCongratulations}>Cerrar</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import TaskList from './components/TaskList';
// import { DragDropContext } from 'react-beautiful-dnd';
// import './App.css'; // Importa tu archivo CSS

// function App() {
//   const [tasks, setTasks] = useState({
//     Design: [],
//     InProgress: [],
//     CodeReview: [],
//     Testing: [],
//     Completed: [],
//   });

//   const [showCongratulations, setShowCongratulations] = useState(false); // Nuevo estado para mostrar el mensaje
//   const [completedTasks, setCompletedTasks] = useState({}); // Estado para rastrear tareas completadas

//   const handleTaskAdd = (text, category) => {
//     if (category !== 'Completed') {
//       const newTask = { text, category };
//       setTasks((prevTasks) => ({
//         ...prevTasks,
//         [category]: [...prevTasks[category], newTask],
//       }));
//     }
//   };

//   const handleTaskComplete = (sourceCategory, index) => {
//     const completedTask = tasks[sourceCategory][index];
//     const nextCategory = getNextCategory(sourceCategory);

//     if (nextCategory === 'Completed') {
//       setCompletedTasks((prevCompletedTasks) => ({
//         ...prevCompletedTasks,
//         [completedTask.text]: true,
//       }));
//     }

//     setTasks((prevTasks) => {
//       const updatedTasks = { ...prevTasks };
//       updatedTasks[sourceCategory] = prevTasks[sourceCategory].filter((task, i) => i !== index);
//       updatedTasks[nextCategory] = [...prevTasks[nextCategory], completedTask];
//       return updatedTasks;
//     });
//   };

//   const getNextCategory = (currentCategory) => {
//     switch (currentCategory) {
//       case 'Design':
//         return 'InProgress';
//       case 'InProgress':
//         return 'CodeReview';
//       case 'CodeReview':
//         return 'Testing';
//       case 'Testing':
//         return 'Completed';
//       default:
//         return 'Completed';
//     }
//   };

//   const handleShowCongratulations = () => {
//     setShowCongratulations(false); // Restablece el estado
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) {
//       return;
//     }

//     const draggedTask = tasks[source.droppableId][source.index];

//     setTasks((prevTasks) => {
//       const updatedTasks = { ...prevTasks };
//       updatedTasks[source.droppableId].splice(source.index, 1);
//       updatedTasks[destination.droppableId].splice(destination.index, 0, draggedTask);
//       return updatedTasks;
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <DragDropContext onDragEnd={onDragEnd}>
//         {Object.keys(tasks).map((category) => (
//           <TaskList
//             key={category}
//             title={category}
//             tasks={tasks[category]}
//             onTaskAdd={(text) => handleTaskAdd(text, category)}
//             onTaskComplete={(index) => handleTaskComplete(category, index)}
//             completedTasks={completedTasks}
//           />
//         ))}
//       </DragDropContext>

//       {showCongratulations && (
//         <div className="congratulations-message">
//           <p>¡Felicidades por completar tu tarea!</p>
//           <button onClick={handleShowCongratulations}>Cerrar</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import TaskList from './components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css'; // Importa tu archivo CSS

function App() {
  const [tasks, setTasks] = useState({
    Design: [],
    InProgress: [],
    CodeReview: [],
    Testing: [],
    Completed: [],
  });

  const [showCongratulations, setShowCongratulations] = useState(false); // Nuevo estado para mostrar el mensaje
  const [completedTasks, setCompletedTasks] = useState({}); // Estado para rastrear tareas completadas

  const handleTaskAdd = (text, category) => {
    if (category !== 'Completed') {
      const newTask = { text, category };
      setTasks((prevTasks) => ({
        ...prevTasks,
        [category]: [...prevTasks[category], newTask],
      }));
    }
  };

  const handleTaskComplete = (sourceCategory, index) => {
    const completedTask = tasks[sourceCategory][index];
    const nextCategory = getNextCategory(sourceCategory);

    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[sourceCategory] = prevTasks[sourceCategory].filter((task, i) => i !== index);
      updatedTasks[nextCategory] = [...prevTasks[nextCategory], completedTask];
      return updatedTasks;
    });

    if (nextCategory === 'Completed') {
      setCompletedTasks((prevCompletedTasks) => ({
        ...prevCompletedTasks,
        [completedTask.text]: true,
      }));
      setShowCongratulations(true);
    }
  };

  const getNextCategory = (currentCategory) => {
    switch (currentCategory) {
      case 'Design':
        return 'InProgress';
      case 'InProgress':
        return 'CodeReview';
      case 'CodeReview':
        return 'Testing';
      case 'Testing':
        return 'Completed';
      default:
        return 'Completed';
    }
  };

  const handleShowCongratulations = () => {
    setShowCongratulations(false); // Restablece el estado
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const draggedTask = tasks[source.droppableId][source.index];

    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[source.droppableId].splice(source.index, 1);
      updatedTasks[destination.droppableId].splice(destination.index, 0, draggedTask);
      return updatedTasks;
    });
  };

  return (
    <div className="App">
       <div>
       <h1 className='tittle'>To-do List</h1>
       </div>
      < DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tasks).map((category) => (
          <TaskList
            key={category}
            title={category}
            tasks={tasks[category]}
            onTaskAdd={(text) => handleTaskAdd(text, category)}
            onTaskComplete={(index) => handleTaskComplete(category, index)}
            completedTasks={completedTasks}
          />
        ))}
      </DragDropContext>

      {showCongratulations && (
        <div className="congratulations-message">
          <p>¡Felicidades por completar tu tarea!</p>
          <button onClick={handleShowCongratulations}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default App;
