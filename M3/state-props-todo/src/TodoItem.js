
import React from 'react'

export default function TodoItem(props) {
  return (
    <>
      <li
        className={props.completed}
        onClick={props.completeTodo}
        data-index={props.index}
      >
        {props.todo.name}
      </li>
      <button onClick={props.deleteTodo} data-index={props.index}>Delete</button>
    </>
  )
}
