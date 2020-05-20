import React, { Component } from "react";
import classes from "./Person.css";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from "prop-types";

class Person extends Component {
  render() {
    const {name, age, click, changed } = this.props;
    console.log("person.js rendered")
    return (
      <Aux>
        <p onClick={click}>I'm {name} and I am {age} years old!</p>
        <p onClick={click}>{this.props.children}</p>
        <input type="text" onChange={changed} value={name}/>
      </Aux>
    ) 
  }
}

Person.propTypes = {
  click: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, classes.Person);