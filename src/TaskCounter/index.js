import React from 'react';
import { TaskContext } from '../TaskContext';
import './TaskCounter.css';

function TaskCounter() {
    const {
        completedTask,
        totalTask,
    } = React.useContext(TaskContext);
    return (
        <h1 className='TaskCounter'>
            You completed {completedTask} of {totalTask} Tasks
        </h1>
    );
}

export { TaskCounter }