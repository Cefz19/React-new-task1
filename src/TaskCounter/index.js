import './TaskCounter.css';

function TaskCounter({ total, completed }) {
    return (
        <h1 className='TaskCounter'>
            You completed {completed} of {total} Wholes
        </h1>
    );
}

export { TaskCounter }