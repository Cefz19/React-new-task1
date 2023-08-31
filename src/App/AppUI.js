import React from "react";
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskLista';
import { TaskItem } from '../TaskItem';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmptyTasks } from '../EmptyTasks';
import { CreateTaskBotton } from '../CreateTaskBotton';
import { TaskForm } from '../TaskForm';
import { Modal } from "../Modal";
import { TaskContext } from "../TaskContext";

function AppUI() {
  const {
    loading,
    error,
    searchedTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
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

      <CreateTaskBotton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TaskForm />
        </Modal>
      )}
    </>

  );
}
export { AppUI };