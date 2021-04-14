// GOAL: Create a form that let's a user enter their first name
//       (This form should be a 'controlled' component)

import { Component } from "react";
import "./SignupForm.css";

class SignupForm extends Component {
  constructor() {
    super();
    // TODO: set initial state so we can track user's
    this.state = {};
  }

  // TODO: update react state when user types in the text input
  handleFirstNameChange = (e) => {};

  // TODO: handle form submission
  handleSubmit = (e) => {};

  render() {
    const { firstName } = this.state;
    console.log("rendering, firstName is:", firstName);
    return (
      <form className="SignupForm" onSubmit={this.handleSubmit}>
        {/* TODO: create a label and text input to collect users first name */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
