import { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(`${this.props.id.slice(0, 2)} CONSTRUCTOR`);
  }

  componentDidMount() {
    const { id } = this.props;
    console.log(`${id.slice(0, 2)}: DID MOUNT`);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevId = prevProps.id;
    const prevCount = prevProps.count;
    console.log(
      `${this.props.id.slice(0, 2)}: DID UPDATE
       count ${prevCount} -> ${this.props.count}`
    );
  }

  componentWillUnmount() {
    console.log(`${this.props.id.slice(0, 2)}:  WILL UNMOUNT`);
  }

  render() {
    const { count, id, remove, increment } = this.props;
    console.log(`${id.slice(0, 2)} RENDER`);
    return (
      <div className="Counter">
        <h2>Count: {count}</h2>
        <button onClick={() => increment(id)}>Add 1</button>
        <button onClick={() => remove(id)}>Delete Counter</button>
      </div>
    );
  }
}

export default Counter;
