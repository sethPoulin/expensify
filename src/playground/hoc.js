// Higher Order Component (HOC) - A component that renders another component.
// Reuse code

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
  //we are returning a COMPONENT
    <div>
      {props.isAdmin && <p>This is private info.  Please do not share!</p>}
      <WrappedComponent {...props}/>
      {//This says 'take all the props that are passed in to the HOC and pass it to the wrapped component.
      }
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return(props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view the Info</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
//the AdminInfo props in the render below get passed to the Info function as a props argument
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));