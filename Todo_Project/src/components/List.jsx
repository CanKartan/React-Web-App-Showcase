import React from 'react'
import Todo from './Todo'
import "../css/List.css"

function List({ atTodos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div className='TodosMain'>
            {
                atTodos && atTodos.map((todo) => (
                    <div key={todo.id} className='Todos todo-card '>
                        <h4>Task</h4>
                        <Todo todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                    </div>
                ))
            }
        </div>
    )
}

export default List
