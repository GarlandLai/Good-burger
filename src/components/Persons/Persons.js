import React, { PureComponent } from 'react';
import Person from "./Person/Person";

class Persons extends PureComponent {
  // // Don't need this if we dont have state. It will fire though since its part of creation lifecycle
  // static getDerivedStateFromProps(props, state) {
  //   console.log(" Persons getDerivedStateFromProps");
  //   return state;
  // }


  // PureComponents includes all props check, so you dont need shouldComponentUpdate if you want to compare all props.

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("persons.js shouldComponentUpdate");
  //   // this is a shallow comparison. It compares pointer in memory and not actual values
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, nextState) {
    console.log("persons.js getSnapshotBeforeUpdate");
    // saves data before update that can be used in componentDidUpdate
    return {message: "snapshot!"};
  }

  componentDidUpdate(prevProps,prevState, snapshot) {
    console.log("persons.js componentDidUpdate")
    console.log(snapshot);
  }

  // componentWillMount() {
  //   console.log("persons componentWillUnmount")
  // }

  render() {
    console.log("persons.js rendered");
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)} 
        name={person.name}
        age={person.age} 
        changed={(event) => this.props.changed(event, person.id)}
      />
      }
    );
  }
}

export default Persons;