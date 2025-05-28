import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import "../css/Todo.css"
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const { id, content } = todo;
    const [editTodo, setEditTodo] = useState(false);
    const [newTodo, setNewTodo] = useState(content);





    const RemoveTodo = () => {
        onRemoveTodo(id);
    }

    const UpdateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditTodo(false);
    }


    return (

        <div className='TodoListMain'>
            <div className='List'>
                {
                    editTodo ? <input className='EditedTodo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input> : content

                }
            </div>
            <div className='Icons'>
                <div className='RemoveIcon' onClick={RemoveTodo}><IoIosRemoveCircleOutline /></div>
                {
                    editTodo ? <FaCheck className='EditIcon' onClick={UpdateTodo} />
                        : <FaRegEdit className='EditIcon' onClick={() => setEditTodo(true)} />
                }

            </div>

        </div >
    )
}

export default Todo
