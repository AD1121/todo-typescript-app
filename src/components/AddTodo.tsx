import React, { useState } from 'react'
import './AddTodo.css'

interface Props {
  addTodo: (text: string) => void
}

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Making sure all extra white spaces are removed
    if (todo.trim()) {
      addTodo(todo.trim())
      setTodo('') // Empty the value of the input 
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='add-todo' type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder='Todo...'/>
      <button type="submit">Add Todo</button>
    </form>
  )
}
