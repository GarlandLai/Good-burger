import React from "react";

const person = props => {
  const {name, age, click} = props;
  return (
  <div>
    <p onClick={click}>I'm {name} and I am {age} years old!</p>
    <p onClick={click}>{props.children}</p>
  </div>
  )
}

export default person;