import React from 'react';
import './TaskSearch.css';
import { TaskContext } from '../TaskContext'

function TaskSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TaskContext);
    return (
        <input
            placeholder="Cut onions"
            className="TaskSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TaskSearch };