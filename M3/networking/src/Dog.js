import axios from 'axios'
import React, { Component } from 'react'

// add a text input
// that specifies the number of images
// that number goes on the end of the dog url
// https://dog.ceo/api/breeds/image/random
// https://dog.ceo/api/breeds/image/random/5

export class Dog extends Component {

  constructor() {
    super()

    this.state = {
      imgURL: [],
      catURL: ""
    }
    console.log("Dog constructor ")
  }

  componentDidMount() {
    console.log("Dog componentDidMount")
    this.getDogImage()
    this.getCatImage()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Dog componentDidUpdate")
  //   console.log(prevProps, prevState)
  //   console.log(this.props)
  // }

  getDogImage = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random/${this.props.dogCount}`)
    .then(response => {
      // console.log(response)
      this.setState({
        imgURL: response.data.message
      })
    })
  }

  getCatImage = async () => {
    let catImage = await axios.get("https://aws.random.cat/meow")
    // console.log(catImage)
    this.setState({
      catURL: catImage.data.file
    })
  }

  render() {
    console.log("Dog render")
    let dogList = this.state.imgURL.map((dogImg, i) => {
      return <img src={dogImg} key={i} alt="cute dog"/>
    })
    return (
      <div>
        <h2>A beautiful dog:</h2>
        {dogList}
        <img src={this.state.catURL} alt="cute cat"/>
        <button onClick={this.getDogImage}>Click for new dog</button>
      </div>
    )
  }

  
}





export default Dog
