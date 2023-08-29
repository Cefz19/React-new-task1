import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TASK_V1');

// const defaultTask = [
//   { text: 'To cut onions', completed: true },
//   { text: 'You do homework', completed: false },
//   { text: 'Cry with the Crybaby', completed: true },
//   { text: 'Your do clean your Carrot', completed: false },
//   { text: 'Onions', completed: true },
// ];

// localStorage.setItem('TASK_V1', JSON.stringify(defaultTask));




function App() {

  const {
    item: task,
    saveItem: saveTask,
    loading,
    error,
   } = useLocalStorage('TASK_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTask = task.filter(task => !!task.completed).length;
  const totalTask = task.length;

  const searchedTask = task.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText)
  }
  );

  const completeTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask[taskIndex].completed = true;
    saveTask(newTask);
  };

  const deleteTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask.splice(taskIndex, 1);
    saveTask(newTask);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTask={completedTask}
      totalTask={totalTask}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTask={searchedTask}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  );
}


export default App;
