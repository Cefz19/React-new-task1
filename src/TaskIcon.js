import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';

const iconTypes = {
    'check': <CheckSVG />,
    'delte': <DeleteSVG />
}

function TaskIcon({ type }) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {iconTypes[type]}
        </span>
    );
}

export { TaskIcon }