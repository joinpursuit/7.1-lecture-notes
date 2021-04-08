import React from 'react'

function User(props) {
  const { name } = props

  return (
    <div>
      Hello {name}
    </div>
  )
}

export default User
