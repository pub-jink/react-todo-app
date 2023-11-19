import React, { useState, useCallback } from 'react';
import { MdAdd} from 'react-icons/md';

const TodoInsert = ({ nextInsert }) => {
    const [ todoValue, setTodoValue ] = useState('');
    const changeValue = useCallback( e => {
        setTodoValue(e.target.value);
    }, []);
    const todoSubmit = useCallback( e => {
        nextInsert(todoValue);
        setTodoValue('');
        // submit은 브라우저 새로고침 발생시켜서 방지하기 위함
        e.preventDefault();
    }, [nextInsert, todoValue]);

    return (
        <form className="todo-insert" onSubmit={ todoSubmit }>
            <input 
                type="text" 
                placeholder="할 일을 입력하세요."
                value={ todoValue }
                onChange={ changeValue } 
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;