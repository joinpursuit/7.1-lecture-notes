import User from "./User"

function App() {
  let userDetails = {
    name: "Jimmy B",
    userId: 7348,
    email: "jimmy@pursuit.org",
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
  return <User {...userDetails} />
}

export default App
