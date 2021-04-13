import User from "./User"

function App() {
  let apiResponse = [
    {
      name: "Jimmy B",
      userId: 7348,
      email: "jimmy@pursuit.org", 
    }, 
    {
      name: "Myra S",
      userId: 7345,
      email: "myra@pursuit.org",
    }
  ]

  let userDetails = {
    name: "Jimmy B",
    userId: 7348,
    email: "jimmy@pursuit.org",
    attributes: ['tall', "a guy"]
  }

  // uppercase letter === component
  // return (
  //   <User
  //     name={userDetails.name}
  //     userId={userDetails.userId}
  //     email={userDetails.email}
  //   />
  // )
  // equivalent
  // return <User {...userDetails} />

  // not equivalent
  return <User userDetails={userDetails} /> 
}

export default App
