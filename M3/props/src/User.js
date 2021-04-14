import React from 'react'

function User(props) {
  const { name, userId, email } = props.userDetails
  // const name = props.userDetails.name

  console.log(props)
  console.log(props.name)
  console.log(props.userDetails)


  return (
    <div>
      Hello {name}
      <p>your id: {userId}</p>
      <p>{email}</p>
    </div>
  )
}

export default User
