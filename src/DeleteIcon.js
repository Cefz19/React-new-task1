import React from "react";
import { TaskIcon } from "./TaskIcon";

function DeleteIcon() {
    return (
        <TaskIcon
            type='check'
            color='red'
        />
    );
}

export { DeleteIcon };