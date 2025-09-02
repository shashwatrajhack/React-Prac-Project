import React from 'react'
import { useState } from 'react';

export default function TodoInput(props) {
    const {handleAddTodos,editTodoValue,setEditTodoValue} = props;
    const [todoValue,setTodoValue] = useState("")
  return (
    <header>
        <input value={todoValue} placeholder='enter todo...' onChange={(e)=> setTodoValue(e.target.value)}/>
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue("")
        }}>Add</button>
    </header>
  )
}
