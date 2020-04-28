import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Garland", age: 31},
      {name: "Leah", age: 30}
    ]
  }
  
  switchNameHandler = () => {
    this.setState({
      persons: [
      {name: "Garland Lai", age: 31},
      {name: "Leah Chen", age: 30}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React Application</h1>
        <p>Its working, YAY!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My Hobbies:  Basketball</ Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies:  Reading</ Person>
      </div>
    );
  }
}

export default App;
