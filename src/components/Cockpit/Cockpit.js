import React, { useEffect } from "react";
import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(()=> {
    console.log("Cockpit useEffect Fired");
    setTimeout(()=> {
      alert('Testing useEffect functionality')
    }, 1000)
    // You can add an empty array to only run on first load
  }, [props.persons])

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
    }
   if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
   }

  return(
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Its working, YAY!</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;