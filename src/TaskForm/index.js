import React from "react";
import { TaskContext } from '../TaskContext';
import './TaskForm.css';

function TaskForm() {
    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext);
    const [newTaskValue, setNewTaskValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>You write your new Task</label>
            <textarea 
            placeholder='Cut onion to the breakfast'
            value={newTaskValue}
            onChange={onChange}
            />
            <div className='TaskForm-buttonContainer'>
            <button type='button'
            className='TaskForm-button TaskForm-button--cancel'
            onClick={onCancel}
            >Cancel</button>
            <button type="submit"
            className='TaskForm-button TaskForm-button--add'
            >Add</button>  
            </div>      
            </form>
    )
}

export { TaskForm };