import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {

  // // Don't need this if we dont have state. It will fire though since its part of creation lifecycle
  // static getDerivedStateFromProps(props, state) {
  //   console.log(" Persons getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate() {
    console.log("persons.js shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, nextState) {
    console.log("persons.js getSnapshotBeforeUpdate");
    // saves data before update that can be used in componentDidUpdate
    return {message: "snapshot!"};
  }

  componentDidUpdate(prevProps,prevState, snapshot) {
    console.log("persons.js componentDidUpdate")
    console.log(snapshot);
  }

  render() {
    console.log("persons.js rendered");
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)} 
        name={person.name}
        age={person.age} 
        changed={(event) => this.props.changed(event, person.id)}/>
      }
    );
  }
}

export default Persons;