import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/userCard";
import UserCardList from "./components/usercardlist";

class App extends Component() {
  state = {
    textInput: "",
    typedText: []
  };

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const previousInput = this.state.textInput;
    this.setState({
      textInput: "",
      typedText: [...this.state.typedText, previousInput]
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.textInput}
            placeholder="HELLO"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.textInput}</p>
      </div>
    );
  }
}

export default App;
