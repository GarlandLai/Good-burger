import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersons] = useState({
        persons: [
          {name: "Garland", age: 31},
          {name: "Leah", age: 30}
        ]})
// class App extends Component {
//   state = {
//     persons: [
//       {name: "Garland", age: 31},
//       {name: "Leah", age: 30}
//     ]
//   }
  
  const switchNameHandler = () => {
    setPersons({
      persons: [
      {name: "Garland Lai", age: 31},
      {name: "Leah Chen", age: 30}
      ]
    })
  }

//   render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React Application</h1>
        <p>Its working, YAY!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My Hobbies:  Basketball</ Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies:  Reading</ Person>
      </div>
    );
  // }
}

export default App;
