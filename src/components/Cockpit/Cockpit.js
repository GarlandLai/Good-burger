import React, { useEffect } from "react";
import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(()=> {
    console.log("Cockpit useEffect Fired");
    setTimeout(()=> {
      alert('Testing useEffect functionality')
    }, 1000);
    // Can return something/function in use effects
    return () => {
      console.log("cockpit cleanup work in useEffect")
    }
    // You can add an empty array to only run on first loads or unmounts
  }, [])

  // Cleanup function with not dependency so it runs after every update
  useEffect(()=> {
    console.log("Cockpit 2nd UseEffect");
    return () => {
      console.log("cockpit cleanup work in 2nd useEffect")
    }
  })

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