import { useState } from 'react'
import './App.css'
import List from './components/List'
import TodoCreat from './components/TodoCreat'



function App() {

  const [todos, settodos] = useState([]);

  const createTodo = (newtodo) => {
    settodos([...todos, newtodo])
  }

  const RemoveTodo = (todoid) => {
    settodos([...todos.filter((todo) => todo.id !== todoid)]);
  }

  const UpdateTodo = (newtodo) => {
    const UpdatedTodos = todos.map((todo) => {
      if (todo.id !== newtodo.id) {
        return todo;
      }
      return newtodo;
    })
    settodos([...UpdatedTodos]);
  }

  console.log(todos)
  return (
    <>
      <div className='TodoCreatMain'>
        <h2>TODO LİST</h2>
        <TodoCreat getTodos={createTodo} />
        <List atTodos={todos} onRemoveTodo={RemoveTodo} onUpdateTodo={UpdateTodo} />
      </div>

    </>
  )
}

export default App
