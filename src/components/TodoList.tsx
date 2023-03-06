import React from 'react'
import './TodoList.css'
import { TodoItem } from './TodoItem' //Importing the interface for Todo

interface Props {
  todos: TodoItem[]
  getTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

export const TodoList: React.FC<Props> = ({ todos, getTodo, deleteTodo  }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {/* Adding checkbox to the li for user to make todo done */}
          { <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => getTodo(todo.id)}
          /> }
          {/* Checking if the todo completed or not */}
          {<span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
             {todo.todoItem}
          </span> }
          {/* Fontawesome trash icon for delete todo */}
          <i onClick={() => deleteTodo(todo.id)} className="fa-solid fa-trash"></i>
        </li>
      ))}
    </ul>
  )
}
