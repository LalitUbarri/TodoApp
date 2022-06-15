import React, { useState } from 'react';
import TodoInput from './todoInput';
import TodoList from './Todo'

const Index = () => {
    const [inputText, setInputText] = useState('');
    const [todo, setTodo] = useState([]);

    console.log(todo);
    return (
        <div className="TodoApp">
            <TodoInput
                todo={todo}
                setTodo={setTodo}
                inputText={inputText}
                setInputText={setInputText}
            />
            <TodoList todoList={todo} setTodo={setTodo} />
        </div>
    );
}

export default Index;
