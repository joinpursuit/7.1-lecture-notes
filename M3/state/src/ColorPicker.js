import React from 'react'

import "./ColorPicker.css"

class ColorPicker extends React.Component {
  constructor() {
    super()

    this.colors = ["blue", "yellow"]

    this.state = {
      colorIndex: 0,
      possibleColors: ["red","blue","yellow"]
    }

  }

  changeColor = () => {
    console.log(this.state.colorIndex)
    console.log(this.state.possibleColors)
    let nextIndex = (this.state.colorIndex + 1) % 3
    // 0
    // 1
    // 2

    this.setState({
      colorIndex: nextIndex
    })
  }

  

  randomColor = () => {
    let index = Math.floor(Math.random() * 3)

    console.log(index)

    this.setState({
      colorIndex: index
    })
  }

  // render is defined on the parent class
  // console.log(this.state.possibleColors[this.state.colorIndex])
  render () {
    return (
      <div className={this.state.possibleColors[this.state.colorIndex]}>
        {this.state.possibleColors[0]}
        {this.colors[1]}
        <button onClick={this.changeColor}>Change Color</button>
        <button onClick={this.randomColor}>Random color</button>
      </div>
    );
  }
}

export default ColorPicker;
