import { Component } from "react";
import "./WarmupCounter.css";

class WarmupCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // 1. Which increment method is better?

  increment1 = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  increment2 = () => {
    this.setState({
      count: this.state.count++,
    });
  };

  //2. What will be passed to this click handler as an argument?

  decrement = (mystery) => {
    console.log("mystery is:", mystery);
    this.setState({
      count: this.state.count - 1,
    });
  };

  //3. decrement and decrement2 have the same body but are declared differently.
  //   What would happen if we replaced the onClick handler with decrement2?
  decrement2(mystery) {
    console.log("mystery is:", mystery);
    this.setState({
      count: this.state.count - 1,
    });
  }

  // 4. What will be rendered when this.state.count === 7 ?
  // 5. What will be rendered when this.state.count === 10 ?
  render() {
    const { count } = this.state;
    return (
      <div className="WarmupCounter">
        <p className="count-display">
          {count > 9 ? "Too big to display" : count}
        </p>
        <button onClick={this.increment1}>Add 1</button>
        <button onClick={this.decrement}>Subtract 1</button>
      </div>
    );
  }
}

export default WarmupCounter;
