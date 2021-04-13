import logo from "./logo.svg"
import "./App.css"

import React, { Component } from "react"

// set up pre-defined to-dos
// in an array

// add a button that adds an item to this.state.todos

// add functionality to mark a todo as complete

// add a button to remove a specific todo

const fakeTodos = [
  "boop a kitty",
  "omg",
  "watch a video",
  "eat lunch",
  "do cross rope routine",
  "meditate",
]

/*

{
  name: "meditate",
  complete: true / false
}

*/

export class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
    }
  }

  addTodo = () => {
    let randomNumber = Math.floor(Math.random() * fakeTodos.length)
    let randomTodo = fakeTodos[randomNumber]

    let newState = [...this.state.todos]

    newState.push({
      name: randomTodo,
      complete: false,
    })

    this.setState({ todos: newState })
  }

  completeTodo = (e) => {
    // figure out how to associate each click
    // with the position in this.state.todos
    console.log("i was clicked on")


    let newState = [...this.state.todos]
    newState[e.target.dataset.index].complete = true

    this.setState({ todos: newState })
  }

  deleteTodo = (e) => {
    console.log(e.target)
    console.log(e.target.dataset.index)

    let newState = [...this.state.todos]
    newState.splice(e.target.dataset.index, 1)

    this.setState({ todos: newState })
  }

  render() {
    // create li for each item in the todos array
    return (
      <div>
        <h1>Todo list</h1>
        <ul>
          {this.state.todos.map((todo, i) => {
            let completed = ""
            if (todo.complete) {
              completed = "completed"
            }

            return (
              <>
              <li
                className={completed}
                onClick={this.completeTodo}
                data-index={i}
              >
                {todo.name}
              </li>
              <button onClick={this.deleteTodo} data-index={i}>Delete</button>
              </>
            )
          })}
        </ul>
        <button onClick={this.addTodo}>Add todo</button>
      </div>
    )
  }
}

export default App
