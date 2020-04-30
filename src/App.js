import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Garland", age: 31},
      {name: "Leah", age: 30}
    ], 
    otherState: "some other value",
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Garland", age: 31},
        {name: event.target.value, age: 30}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} />
          })}
        </div>
      );
    };
    return (
      <div className="App"> 
        <h1>Hi, I'm a React Application</h1>
        <p>Its working, YAY!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
} 

export default App;
