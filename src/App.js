import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskLista';
import { TaskItem } from './TaskItem';
import { CreateTaskBotton } from './CreateTaskBotton';

const defaultTask = [
  { text: 'To cut onions', completed: true },
  { text: 'You do homework', completed: false },
  { text: 'Cry with the Crybaby', completed: true },
  { text: 'Your do clean your Carrot', cmpleted: false },
  { text: 'Onions', cmpleted: true },
];

function App() {
  const [task, setTask] = React.useState(defaultTask);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTask = task.filter(task => !!task.completed).length;
  const totalTask = task.length;

  const searchedTask = task.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
   return taskText.includes(searchText)
  }
  );


  console.log('The users browser task of ' + searchValue)

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
          />
        ))}
      </TaskList>

      <CreateTaskBotton />
    </>

  );
}


export default App;
