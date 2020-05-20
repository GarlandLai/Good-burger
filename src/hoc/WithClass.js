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
      <WrappedComponent />
    </div>
  );
}

export default withClass;