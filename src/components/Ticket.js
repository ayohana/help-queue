import React from "react";

function Ticket(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
    </React.Fragment>
  );
}

export default Ticket;