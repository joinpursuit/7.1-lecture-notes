import React, { Component } from 'react'

// refactor to be a functional component
export class ProductClass extends Component {

  // constructor() {
  //   super()
  // }
  
  render() {
    const { name } = this.props

    return (
      <div>
        {this.props.manufacturer} {name} : ${this.props.price}
      </div>
    )
  }
}

export default ProductClass
