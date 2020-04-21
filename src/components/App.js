import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return (
    <React.Fragment>
      <Header /> {/* Added <Header /> as a child element of <ReactFragment> */}
      <TicketControl />
      {/* This is a JSX comment. */}
      <hr/>
    </React.Fragment>
  );
}
// All components returning more than one element must be wrapped in a <ReactFragment>.
// As we can see, our App component is really just a container for our other components now.

export default App;