import React, { useState } from 'react'
import { TodoItem } from './components/TodoItem' //Importing the interface for Todo
import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'

const App = () => {
  // Using useState to get the form value todo and add it to the list
  const [todo, setTodo] = useState<TodoItem[]>([]) 

  // Add a todo
  const addTodo = (todoItem: string) => {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        todoItem,
        completed: false,
      },
    ])
  }

  // List all todo
  const getTodos = (id: number) => {
    setTodo(todo.map(todos => (todos.id === id ? { ...todos, completed: !todos.completed } : todos)))
  }

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodo(todo.filter(todos => todos.id !== id))
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todo} getTodo={getTodos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
