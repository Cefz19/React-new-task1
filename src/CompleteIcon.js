import React from 'react';
import { TaskIcon } from './TaskIcon';

function CompleteIcon() {
    return (
        <TaskIcon 
        type='check'
        color='gray'
        />
    );
}

export { CompleteIcon };