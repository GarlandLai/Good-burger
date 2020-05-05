import React, { Component } from 'react';
import './App.css';
import Radium from "radium";
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: "inherit",
      border: "1px solid blu e",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
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
        style.backgroundColor = "red";
        style[":hover"] = {
          backgroundColor: "salmon",
          color: "black"
        }
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App"> 
        <h1>Hi, I'm a React Application</h1>
        <p className={classes.join(" ")}>Its working, YAY!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
} 

export default Radium(App);
