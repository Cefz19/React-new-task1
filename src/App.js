import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskLista';
import { TaskItem } from './TaskItem';
import { CreateTaskBotton } from './CreateTaskBotton';

// const defaultTask = [
//   { text: 'To cut onions', completed: true },
//   { text: 'You do homework', completed: false },
//   { text: 'Cry with the Crybaby', completed: true },
//   { text: 'Your do clean your Carrot', completed: false },
//   { text: 'Onions', completed: true },
// ];

// localStorage.setItem('TASK_V1', JSON.stringify(defaultTask));

// localStorage.removeItem('Task_V1');

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };
  return [item, saveItem];

}

function App() {

  const [task, saveTask] = useLocalStorage('TASK_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTask = task.filter(task => !!task.completed).length;
  const totalTask = task.length;

  const searchedTask = task.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText)
  }
  );



  const fullTask = (text) => {
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

    <>
      <TaskCounter
        completed={completedTask}
        total={totalTask} />
      <TaskSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />


      <TaskList>
        {searchedTask.map(task => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => fullTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>

      <CreateTaskBotton />
    </>

  );
}


export default App;
