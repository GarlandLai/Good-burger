import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("app constructor rendered")
  }

  state = {
    persons: [
      {id: 0, name: "Garland", age: 31},
      {id: 1, name: "Leah", age: 30},
      {id: 2, name: "Ponzu", age: 10},
      {id: 3, name: "Hobbes", age: 4},
      {id: 4, name: "Calvin", age: 3}
    ], 
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }
  static getDerivedStateFromProps( props, state ) {
    console.log("App.js getDerivedStateFromProps", props);
    return state;
  }
  
  componentDidMount() {
    console.log("app.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App shouldComponentUpdate")
    // set to true get rid of warning. It defaults to true always
    return true;
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
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

    // Recommended way to update state that depends on the old state. 
    this.setState((prevState, props) => {
      return {
      persons: persons,
      changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log("app.js render fired")
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}/>
      );
    };

    return (
      <Aux>
        <button onClick={() =>{
            this.setState({showCockpit: false})
          }}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            personsLength={this.state.persons.length} 
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          /> 
        ) : null}
        {persons}
      </Aux>
    );
  }
} 

export default withClass(App, classes.App);
