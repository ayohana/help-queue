import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <ReactFragment>
      <Header /> {/* Added <Header /> as a child element of <ReactFragment> */}
      <TicketList />
      {/* This is a JSX comment. */}
      <hr/>
    </ReactFragment>
  );
}
// All components returning more than one element must be wrapped in a <ReactFragment>.
// As we can see, our App component is really just a container for our other components now.

export default App;