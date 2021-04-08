
import React from 'react'

function ProductItem(props) {
  const { name, price, manufacturer } = props


  // no dollar signs needed in jsx
  // let thing = `${name}`

  return (
    <div>
      {manufacturer} {name} : ${price}
    </div>
  )
}

export default ProductItem
