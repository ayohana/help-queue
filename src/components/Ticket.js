import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.Fragment>
      <div onClick= {() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

// Notice we've also added props as an argument to the Ticket component function's method signature (function Ticket(props)) to indicate it should now accept props. Remember that our components are just functions. All we're doing now is passing an argument (props) into our Ticket function.

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

// When it's a property of the component, it should be lower camel case (Ticket.propTypes). When it's referring to the library we are importing, it should be upper camel case (names: PropTypes.string).

export default Ticket;