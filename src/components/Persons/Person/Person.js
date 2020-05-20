import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    const {name, age, click, changed } = this.props;
    console.log("person.js rendered")
    return [
      // <div className={classes.Person}>
      <p key="p1"onClick={click}>I'm {name} and I am {age} years old!</p>,
      <p key="p2"onClick={click}>{this.props.children}</p>,
      <input key="p3" type="text" onChange={changed} value={name}/>
    // </div>
    ] 
  }

}

export default Person;