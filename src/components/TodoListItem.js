import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import cn from 'classnames';

const TodoListItem = ( { todo, todoRemove, todoCheck } ) => {
    const { id, text, checked } = todo;

    return (
        <div className="todo-list-item" >
            <div className={cn("checkbox", { checked })} onClick={() => todoCheck(id) }> 
                { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <p className="text">{ text }</p>
            </div>
            <div className="remove" onClick={() => todoRemove(id) }>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
};

export default TodoListItem;