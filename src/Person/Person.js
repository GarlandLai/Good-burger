import React from "react";
import "./Person.css";
import styled from "styled-components";


const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  const {name, age, click, changed } = props;
  return (
    <StyledDiv>
    <p onClick={click}>I'm {name} and I am {age} years old!</p>
    <p onClick={click}>{props.children}</p>
    <input type="text" onChange={changed} value={props.name}/>
  </StyledDiv>
  )
}

export default person;