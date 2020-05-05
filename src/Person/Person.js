import React from "react";
import "./Person.css";
import Radium from "radium";

const person = props => {
  const {name, age, click, changed } = props;
  const style = {
    '@media (min-width: 500px)': {
      width: "450px"
    }
  };
  return (
  <div className="Person" style={style}>
    <p onClick={click}>I'm {name} and I am {age} years old!</p>
    <p onClick={click}>{props.children}</p>
    <input type="text" onChange={changed} value={props.name}/>
  </div>
  )
}

export default Radium(person);