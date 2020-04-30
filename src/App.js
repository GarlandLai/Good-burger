import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 0, name: "Garland", age: 31},
      {id: 1, name: "Leah", age: 30}
    ], 
    otherState: "some other value",
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})
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
            key={person.id}
            click={() => this.deletePersonHandler(index)} 
            name={person.name}
            age={person.age} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
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
