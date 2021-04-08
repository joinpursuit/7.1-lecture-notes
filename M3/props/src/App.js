import logo from './logo.svg';
import User from './User'

function App() {
  let userDetails = {
    name: "Jimmy B",
    userId: 7348,
    email: "jimmy@pursuit.org"
  }

  return <User name={userDetails.name} />

}

export default App;
