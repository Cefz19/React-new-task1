import React from 'react';
import './TaskSearch.css';
function TaskSearch({
    searchValue,
    setSearchValue
}) {

    return (
        <input
            className='TaskSearch'
            placeholder="To cut onions"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TaskSearch }