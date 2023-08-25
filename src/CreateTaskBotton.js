import './CreateTaskButton.css'
function CreateTaskBotton() {
    return (
        <button
        className="CreateTaskButton"
        onClick={(event) => {
            console.log('You push click')
            console.log(event)
            console.log(event.target)
        }
        }
        >+</button>
    );
  }
  
  export { CreateTaskBotton }