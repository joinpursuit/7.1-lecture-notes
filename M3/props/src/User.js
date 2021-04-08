import React from 'react'

function User(props) {
  const { name, userId, email } = props
  console.log(props)

  return (
    <div>
      Hello {name}
      <p>your id: {userId}</p>
      <p>{email}</p>
    </div>
  )
}

export default User
