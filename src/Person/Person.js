import React from "react";
import "./Person.css"

const person = props => {
  const {name, age, click, changed, id} = props;
  return (
  <div className="Person">
    <p onClick={click}>I'm {name} and I am {age} years old!</p>
    <p onClick={click}>{props.children}</p>
    <input id={id} type="text" onChange={changed} value={props.name}/>
  </div>
  )
}

export default person;