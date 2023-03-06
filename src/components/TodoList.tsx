import React from 'react'
import { TodoItem } from './TodoItem' //Importing the interface for Todo

interface Props {
  todos: TodoItem[]
  getTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

export const TodoList: React.FC<Props> = ({ todos, getTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => getTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.todoItem}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
