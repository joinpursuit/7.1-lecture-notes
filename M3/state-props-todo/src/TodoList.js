// import React, { Component } from 'react'
import React from "react"
import TodoItem from "./TodoItem"

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, i) => {
        let completed = ""
        if (todo.complete) {
          completed = "completed"
        }

        return (
          <TodoItem
            key={i}
            todo={todo}
            completed={completed}
            index={i}
            completeTodo={props.completeTodo}
            deleteTodo={props.deleteTodo}
          />
        )
      })}
    </ul>
  )
}

// export default TodoList

// export class TodoList extends Component {
//   render() {
//     return (

//     )
//   }
// }

export default TodoList
