import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.ticketList).map((ticket) => {
        return  <Ticket
          whenTicketClicked={props.onTicketSelection} 
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id}
        />
      })}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

// First, we no longer need to pass index into our map() function. We've updated the key to be equal to ticket.id.
// Note that we also have to pass in an id prop. This is because we can't pass a key to a child component as a prop. However, our Ticket component will still need access to its own id, hence a separate id prop which is also set to ticket.id.

export default TicketList;