import React, { Component } from 'react'

/*
What is the difference.? of sending the props in each of the following cases :

const customers = {
    [name: 'Chuck Norris', status: 'rich'],
    [name: 'Elon Musk', status: 'rich-rich'],
}
...
< Users {customers} />
<Users customers = {customers} />
<Users {...customers} />



*/

// refactor to be a functional component
class ProductClass extends Component {
  constructor(props) {
    super()

    this.otherThing = "another value"
    // this is ok
    this.somePropertyChangedButBasedOnAProp = `my name is: ${props.name}`

    console.log(Component)
    // dont do this ever
    this.state = {
      name: props.name
    }
  }
  
  render() {
    // const { name } = this.props
    const name = this.props.name

    return (
      <div>
        {this.props.manufacturer} {name} : ${this.props.price}
        {this.otherThing}
      </div>
    )
  }
}

export default ProductClass