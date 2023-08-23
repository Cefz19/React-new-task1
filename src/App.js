import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskLista';
import { TaskItem } from './TaskItem';
import { CreateTaskBotton } from './CreateTaskBotton';

const defaultTask = [
  { text: 'To cut onions', completed: false },
  { text: 'You do homework', completed: true },
  { text: 'Cry with the Crybaby', completed: false },
  { text: 'Yor do clean your bedroom', cmpleted: true },
];

function App() {

  return (

    <>
    
    <TaskCounter completed={16} total={25} />
      <TaskSearch />

      <TaskList>
        {defaultTask.map(task => (
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
