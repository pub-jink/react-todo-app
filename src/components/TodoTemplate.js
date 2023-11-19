const TodoTemplate = ( { children } ) => {
    return (
        <div className="todo-tamplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{ children }</div>
        </div>
    )
}

export default TodoTemplate;