import React, { useState } from 'react'
import './AddTodo.css'

interface TodoFormProps {
  addTodo: (todo: string) => void
}

export const AddTodo = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Making sure all extra white spaces are removed
    if (text.trim()) {
      addTodo(text)
      setText('') // Empty the value of the input 
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='add-todo' type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Add todo here...'/>
      <button type="submit">Add Todo</button>
    </form>
  )
}
