import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Garland", age: 31},
      {name: "Leah", age: 30}
    ], 
    otherState: "some other value"
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName[0], age: 31},
        {name: newName[1], age: 30}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Garland", age: 31},
        {name: event.target.value, age: 30}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: "inherit",
      fontWeight:"600",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React Application</h1>
        <p>Its working, YAY!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, ["Garland Lai", "Leah Chen"])}>Switch Name</button>
        <Person id="0" name={this.state.persons[0].name}
        age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, ["Garland", "Leah"])}> My Hobbies:  Basketball</ Person>
        <Person id="1" name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, ["Garland", "Leah"])} changed={this.nameChangedHandler}> My Hobbies:  Reading</ Person>
      </div>
    );
  }
} 

export default App;
