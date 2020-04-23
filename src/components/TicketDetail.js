import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props;
  // note that we're destructuring props to create a ticket object and an onClickingDelete method

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={ onClickingEdit }>Update Ticket</button>
      <button onClick={ () => onClickingDelete(ticket.id) }>
        {/* When the button is clicked, onClickingDelete(ticket.id) will be executed. Once again, we need to use () => in our JSX curly braces because our function has parens with an argument. */}
        Close Ticket
      </button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;