import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }; // this is our DEFAULT STATE
  }

  render(){
    return(
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default TicketControl;