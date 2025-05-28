import React, { useState } from 'react'
import "../css/TodoCreat.css"

function TodoCreat({ getTodos }) {

    const [newtodo, setnewtodo] = useState('');

    const CreateTodo = () => {
        if (!newtodo) {
            alert("Lütfen Görev Giriniz")
            return;
        };
        const request = {
            id: Math.floor(Math.random() * 9999),
            content: newtodo
        }
        getTodos(request);
        setnewtodo('');
    }

    return (
        <div className='TodoCreatContainer'>
            <p>Add a todo item : </p>
            <input
                value={newtodo}
                onChange={(e) => setnewtodo(e.target.value)}></input>
            <button onClick={CreateTodo}>Add</button>
        </div>
    )
}

export default TodoCreat
