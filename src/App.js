import React, { useState, useRef, useCallback } from 'react';
import './App.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
	const [ todos, setTodos ] = useState([
		{
			id: 1,
			text: '리액트를 공부하기',
			checked: true
		},
		{
			id: 2,
			text: '육아하기',
			checked: true
		},
		{
			id: 3,
			text: '일하기',
			checked: false
		}
	]);

	// 새로운 할일 리스트 아이디 
	const nextId = useRef(4); // 고유값으로 설정하기 위해 useRef 사용

	// 할일 리스트 추가
	const nextInsert = useCallback( text => {
		const nextTodo = {
			id: nextId.current,
			text,
			checked: false
		}
		setTodos(todos.concat(nextTodo)); // concat사용해서 새로운 배열 반환
		nextId.current += 1; // 아이디 하나씩 올려주기
	}, [todos]);

	// 할 일 리스트 지우기
	const todoRemove = useCallback( id => {
		const removeData = todos.filter( todo => todo.id !== id ); // 선택한 객체의 아이디랑 같이 않은 객체만 반환
		setTodos(removeData);
	}, [todos]);

	// 할 일 리스트에서 한 일 체크
	const todoCheck = useCallback( id => {
		const doChecked = todos.map( todo => 
			todo.id === id ? { ...todo, checked: !todo.checked } : todo
		)
		setTodos(doChecked);
	}, [todos]);


	return (
		<div className="App">
			<TodoTemplate>
				<TodoInsert nextInsert={ nextInsert }/>
				<TodoList todos={ todos } todoRemove={ todoRemove } todoCheck={ todoCheck }/>
			</TodoTemplate>
		</div>
	);
}

export default App;
