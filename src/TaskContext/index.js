import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();


function TaskProvider({ children }) {
    const {
        item: task,
        saveItem: saveTask,
        loading,
        error,
    } = useLocalStorage('TASK_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTask = task.filter(task => !!task.completed).length;
    const totalTask = task.length;

    const searchedTask = task.filter((task) => {
        const taskText = task.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return taskText.includes(searchText)
    }
    );

    const addTask = (text) => {
        const newTask = [...task];
        newTask.push({
            text,
            completed: false,
        });
        saveTask(newTask);
    }

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
        <TaskContext.Provider value={{
            loading,
            error,
            completedTask,
            totalTask,
            searchValue,
            setSearchValue,
            searchedTask,
            addTask,
            completeTask,
            deleteTask,
            openModal, 
            setOpenModal,    
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };