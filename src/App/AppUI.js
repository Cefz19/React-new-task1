import React from "react";
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskLista';
import { TaskItem } from '../TaskItem';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmptyTasks } from '../EmptyTasks';
import { CreateTaskBotton } from '../CreateTaskBotton';

function AppUI({
  loading,
  error,
  completedTask,
  totalTask,
  searchValue,
  setSearchValue,
  searchedTask,
  completeTask,
  deleteTask,
}) {
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
        {loading && <TasksLoading />}
        {error && <TasksError />}
        {(!loading && searchedTask.length === 0) && <EmptyTasks />}


        {searchedTask.map(task => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>

      <CreateTaskBotton />
    </>

  );
}
export { AppUI };