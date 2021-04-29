import React, { Component } from "react"
import Dog from "./Dog"
import NumberOfDogs from "./NumberOfDogs"

export class App extends Component {
  constructor() {
    super()
    this.state = {
      dogCount: 0,
    }
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      dogCount: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Random Dog API</h1>
        <NumberOfDogs
          dogCount={this.state.dogCount}
          handleChange={this.handleChange}
        />
        <Dog dogCount={this.state.dogCount} />
      </div>
    )
  }
}

export default App
