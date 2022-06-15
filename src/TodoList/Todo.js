import React, { useState, useEffect } from 'react';

const Todo = ({ todoList, setTodo }) => {
    const deleteHandle = (todo) => {
        setTodo(todoList.filter((el) => el.id !== todo.id));
    }
    return (
        <div className="toDo_container">
            <div className="todo_inner">
                <div className="table1">
                    {todoList.length !== 0 ? todoList.map(item => {
                        return <div className="inner_table mb-10" key={item.id}>
                            <div className="todo_Details"> {item.text}</div>
                            <div className="delet" onClick={() => deleteHandle(item)}> Delete </div>
                        </div>
                    }) : null}

                </div>
            </div>
        </div>
    );
}

export default Todo;
