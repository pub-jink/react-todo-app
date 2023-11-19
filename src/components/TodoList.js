import TodoListItem from "./TodoListItem";

const TodoList = ( { todos, todoRemove, todoCheck } ) => {
    return (
        <div className="todo-list">
            {
                todos.map( todo => <TodoListItem todo={ todo } todoRemove= { todoRemove } todoCheck={ todoCheck } key={ todo.id} /> )
            }
        </div>
    )
}

export default TodoList;