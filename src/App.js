import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/userCard";
import UserCardList from "./components/usercardlist";

class App extends Component() {
  state = {
    textInput: "",
    userdata: []
  };

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userProfile = this.state.textInput;
    fetch(`https://api.github.com/users/${userProfile}`)
    .then(res => res.json())
    .then((result) => {
      this.setState({
        textInput: "",
        userdata: [...this.state.userdata, result]
    })
    
    });
  };



  render() {
    const {userdata} = this.state;
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
