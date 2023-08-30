import React from "react";
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskLista';
import { TaskItem } from '../TaskItem';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmptyTasks } from '../EmptyTasks';
import { TaskContext } from "../TaskContext";
import { Modal } from "../Model";
import { CreateTaskBotton } from '../CreateTaskBotton';

function AppUI() {
  const {
    loading,
    error,
    searchedTask,
    completeTask,
    deleteTask,
    openModal,
  } = React.useContext(TaskContext);
  return (
    <>
      <TaskCounter />
      <TaskSearch />

      <TaskList>
        {loading && (<>
          <TasksLoading />
          <TasksLoading />
          <TasksLoading />
        </>)}
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

      {openModal && (
        <Modal>
        The Functionality of Add Task
      </Modal>
      )}
    </>

  );
}
export { AppUI };