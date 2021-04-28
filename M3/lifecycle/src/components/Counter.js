import { Component } from "react";
import "./Counter.css";

// pure functions are functions like add:
const add = (a, b) => a + b;

// this is pure because given the same inputs, it always returns the same output.
// It only depends on its arguments

// functions that are not pure are like addRandom:
const addRandom = (a) => a + Math.random();
// 'impure' functions may depend on external values other than the function inputs

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(`${this.props.idx} CONSTRUCTOR`);
  }

  componentDidMount() {
    console.log(`${this.props.idx} DID MOUNT`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`${this.props.idx} DID UPDATE
    ${prevProps.count} -> ${this.props.count}`);

    // This is a bad idea and will lead to an infinite loop:
    // this.setState({})

    // if (prevProps.count !== this.props.count) {
    //     // This is ok - no infinite loop
    //     this.setState({})
    // }
  }

  componentWillUnmount() {
    console.log(`${this.props.idx} WILL UNMOUNT`);
  }

  render() {
    const { count, idx, increment, removeCounter } = this.props;
    console.log(`${idx} RENDER`);

    return (
      <div className="Counter">
        <h2>Count: {count}</h2>
        <button onClick={() => increment(idx)}>Add 1</button>
        <button onClick={() => removeCounter(idx)}>Delete Counter</button>
      </div>
    );
  }
}

export default Counter;
