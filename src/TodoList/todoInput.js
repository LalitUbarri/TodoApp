import React from 'react';
import Todo from './Todo'

const Index = ({ setTodo, todo, inputText, setInputText }) => {

    const Onsubmit = (e) => {
        e.preventDefault();

        setTodo([
            ...todo, { text: inputText, complete: false, id: Math.random() * 1000 }
        ])
        setInputText('')
    }

    return (
        <>
            <form onSubmit={Onsubmit}>
                <div className="todo_outer">
                    <input type="text"
                        placeholder="enter todo.."
                        name="todo"
                        className="intputBox"
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                        required
                    />
                    <button
                        type='submit'
                        className="submt_btn"
                    > Add </button>
                </div>
            </form>


        </>
    );
}

export default Index;
