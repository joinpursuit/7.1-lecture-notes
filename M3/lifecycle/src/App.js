import { Component } from "react";
import Counter from "./components/Counter";
import { v4 as uuid } from "uuid";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [],
    };
  }

  componentDidUpdate() {
    toast("App did update. Yay!");
    console.log("---------------------");
  }

  removeCounter = (idx) => {
    // counters is a 'shallow copy' of this.state.counters
    const counters = [...this.state.counters];
    // delete an element from counters
    counters.splice(idx, 1);
    // update this.state.counters to reflect our counters array with the deleted item
    this.setState({ counters });
  };

  newCounter = () => {
    // creates a shallow copy of this.state.counters and adds a 0 to the end of the array
    const counters = [...this.state.counters, 0];
    this.setState({ counters });
  };

  increment = (idx) => {
    const counters = [...this.state.counters];
    counters[idx] += 1;
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    const myCounters = counters.map((count, i) => {
      return (
        <Counter
          key={i}
          idx={i}
          count={count}
          increment={this.increment}
          removeCounter={this.removeCounter}
        />
      );
    });

    return (
      <div className="App">
        <ToastContainer />
        <button onClick={this.newCounter}>Add Another Counter</button>
        {myCounters}
      </div>
    );
  }
}

export default App;
