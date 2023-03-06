import React, { useState } from 'react'
import './App.css'

import { TodoItem } from './components/InterfaceTodoItem'  //Importing the interface for Todo
import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'

 const App = () => {
    // Using useState to get the form value todo and add it to the list
  const [todos, setTodos] = useState<TodoItem[]>([])

  const addTodo = (todo: string) => {
    const newTodo = { id: Date.now(), todo, completed: false }
    setTodos([...todos, newTodo])
  }

    // List and update todo
  const getTodo = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

    // Delete a todo
    const deleteTodo = (id: number) => {
      setTodos(todos.filter(todos => todos.id !== id))
    }

  return (
    <div>
      <div className="container">
        <h1>Add todo!</h1>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} getTodo={getTodo}  deleteTodo={deleteTodo}/>
      </div>
    </div>
  )
}

export default App