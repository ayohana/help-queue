import React from "react";

function Header(){
  return (
    <h1>Help Queue</h1>
  );
}

// Note also that we didn't need to wrap our JSX code in a <ReactFragment>. This is because our component is only returning one element. If we were returning multiple elements, we'd need to use a fragment.

export default Header;