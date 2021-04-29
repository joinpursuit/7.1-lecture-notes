import React, { Component } from 'react'
import Dog from './Dog'

export class App extends Component {
  render() {
    return (
      <div>
        Random Dog API
        <Dog />
      </div>
    )
  }
}

export default App
