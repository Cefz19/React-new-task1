import './CreateTaskButton.css'

function CreateTaskBotton({ setOpenModal }) {
    return (
        <button
            className="CreateTaskButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        >+</button>
    );
}

export { CreateTaskBotton }