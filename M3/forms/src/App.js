import WarmupCounter from "./Components/WarmupCounter";
import SignupForm from "./Components/1.SignupForm";
// import SignupForm from "./Components/2.SignupForm";
// import SignupForm from "./Components/3.SignupForm";
// import SignupForm from "./Components/4.SignupForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section id="warmup">
        <h1>Warm Up Exercise</h1>
        <WarmupCounter />
      </section>
      <section id="my-first-form">
        <h1>My First React Form</h1>
        <SignupForm />
      </section>
    </div>
  );
}

export default App;
