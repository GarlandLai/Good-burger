import React from "react";
import classes from "./Person.css";

const person = props => {
  const {name, age, click, changed } = props;
  console.log("person rendered")
  return (
    <div className={classes.Person}>
    <p onClick={click}>I'm {name} and I am {age} years old!</p>
    <p onClick={click}>{props.children}</p>
    <input type="text" onChange={changed} value={props.name}/>
  </div>
  )
}

export default person;