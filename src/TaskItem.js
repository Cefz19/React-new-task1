import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TaskItem.css';
function TaskItem(props) {
  return (
    <li className='Items'>
      <CompleteIcon />
      {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}>V</span> */}
      <p className={`TaskItem-p ${props.completed && "TaskItem-p--complete"}`}>
        {props.text}</p>
        <DeleteIcon />
      {/* <span 
      className='Icon Icon-delete'
      onClick={props.onDelete}
      >X</span> */}
    </li>
  );
}

export { TaskItem }