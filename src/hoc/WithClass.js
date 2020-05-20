import React from 'react';

// const withClass = props => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

// Alternate way to create a HOC
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      {/* Needs to set each individual prop. prop={prop} makes it ONE prop only. */}
      <WrappedComponent {...props}/>
    </div>
  );
}

export default withClass;