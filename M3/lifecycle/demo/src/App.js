import { Component } from "react";
import Counter from "./components/Counter";
import { v4 as uuid } from "uuid";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [],
    };
  }

  componentDidUpdate() {
    console.log("-----------------------");
  }

  addNewCounter = () => {
    this.setState({
      counters: [...this.state.counters, { count: 0, id: uuid() }],
    });
  };

  increment = (id) => {
    const counters = [...this.state.counters];
    const idx = counters.findIndex((counter) => counter.id === id);
    const counter = { ...counters[idx] };
    counter.count += 1;
    counters.splice(idx, 1, counter);
    this.setState({ counters });
  };

  remove = (id) => {
    const idx = this.state.counters.findIndex((counter) => counter.id === id);
    const counters = [...this.state.counters];
    counters.splice(idx, 1);
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;

    return (
      <div className="App">
        <button onClick={this.addNewCounter}>Add Another Counter</button>
        {counters.map((counter, i) => (
          <Counter
            key={counter.id}
            id={counter.id}
            count={counter.count}
            increment={this.increment}
            remove={this.remove}
          />
        ))}
      </div>
    );
  }
}

export default App;
