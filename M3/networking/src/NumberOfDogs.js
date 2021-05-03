import React from "react"

export default function NumberOfDogs(props) {
  return (
    <div>
      <input
        type="number"
        onChange={props.handleChange}
        value={props.dogCount}
      />
    </div>
  )
}
