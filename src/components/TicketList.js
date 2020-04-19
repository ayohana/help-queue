import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

function TicketList(){
  return (
    <React.Fragment>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </React.Fragment>
  );
}

// Why bother to include the index and create a unique key value? If we don't, our code will run correctly but we'll get the following error in the console: Warning: Each child in an array or iterator should have a unique "key" prop. This error is pretty clear. Each ticket should have a unique "key" prop.

// Our tickets don't have a unique ID value (at least not yet), which is why we are using the item's array index for now. If our tickets already had unique IDs, we wouldn't need to pass in index as an argument to map() - we'd just use the unique IDs as keys. The keys just need to be unique so React can manage reconciliation effectively.

export default TicketList;