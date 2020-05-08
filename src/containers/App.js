import React, { Component } from 'react';
// added options in css-loader in config (prod and dev) allow us to import classes below
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      {id: 0, name: "Garland", age: 31},
      {id: 1, name: "Leah", age: 30},
      {id: 2, name: "Ponzu", age: 10},
      {id: 3, name: "Hobbes", age: 4},
      {id: 4, name: "Calvin", age: 3}
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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    };

    return (
      <div className={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
} 

export default App;
