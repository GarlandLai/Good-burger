import React, { Component } from 'react';
// added options in css-loader in config (prod and dev) allow us to import classes below
import classes from './App.css';
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
    let persons = null;
    // adding button variable to use for dynamically adding class to apply
    let btnClass = '';
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
      // dynamically update class 
      btnClass = classes.Red;
    };

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
     <div className={classes.App}> 
      <h1>Hi, I'm a React Application</h1>
      <p className={assignedClasses.join(" ")}>Its working, YAY!</p>
      <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>          
      {persons}
     </div>
    );
  }
} 

export default App;
