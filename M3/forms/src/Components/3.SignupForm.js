// GOALS:
//    - combine onChange handlers into a single function
//    - disable the submit button if either form field is empty

import { Component } from "react";
import "./SignupForm.css";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  // TODO: combine the onChange event handlers

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleSubmit = (e) => {};

  // TODO: write a method to return true if firstName and lastName are
  isValidInput = () => {};

  render() {
    const { firstName, lastName } = this.state;
    // TODO: use this.isValidInput() to determine if we should disable the submit button

    return (
      <form className="SignupForm" onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        {/* TODO: update onChange handler */}
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={this.handleFirstNameChange}
          value={firstName}
        />

        <label htmlFor="lastName">Last Name:</label>
        {/* TODO: update onChange handler */}
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={this.handleLastNameChange}
          value={lastName}
        />

        {/* TODO: disable button if form input is not valid */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
