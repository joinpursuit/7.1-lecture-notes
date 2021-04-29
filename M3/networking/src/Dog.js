import axios from 'axios'
import React, { Component } from 'react'

// Dog.componentDidMount
// Dog.constructor

export class Dog extends Component {

  constructor() {
    super()

    this.state = {
      imgURL: "",
      catURL: ""
    }
  }

  componentDidMount() {
    this.getDogImage()
    this.getCatImage()
  }

  getDogImage = () => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      console.log(response)
      this.setState({
        imgURL: response.data.message
      })
    })
  }

  getCatImage = async () => {
    let catImage = await axios.get("https://aws.random.cat/meow")
    console.log(catImage)
    this.setState({
      catURL: catImage.data.file
    })
  }

  render() {
    return (
      <div>
        <h2>A beautiful dog:</h2>
        <img src={this.state.imgURL} alt="cute dog"/>
        <img src={this.state.catURL} alt="cute cat"/>
        <button>Click for new dog</button>
      </div>
    )
  }

  
}





export default Dog
