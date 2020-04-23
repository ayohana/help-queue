import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { // our DEFAULT STATE
      formVisibleOnPage: false, // a local state
      masterTicketList: [], // a shared state
      selectedTicket: null,
      editing: false
      // Each of these properties is a state slice. A state slice is a piece of state that can be mutated independently of other state slices.
    }; 
  }

  // Because this method uses arrow notation, this is automatically bound to its current lexical scope, which is an instance of the class itself. (An ES6 feature)
  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      })); // toggles a boolean
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({formVisibleOnPage: false});
  }
  // Unlike push(), which directly alters the array its called on, concat() makes a copy of that array. 

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id); // we want to filter out all tickets that does not have the ticket ID that will be passed into the method
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMasterTicketList = this.state.masterTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
      // We filter the previous version of the ticket out of the list with filter() and then add the the edited version of the ticket to the list with concat(). 
    this.setState({masterTicketList: editedMasterTicketList});
    this.setState({editing: false});
    this.setState({selectedTicket: null});
  }

  // Because this is the first class component we are building, a quick refresher: class components always need to have a render() method. 
  // Note that this code is just JavaScript, not JSX. We can use plain old JavaScript outside of our return() statement. We only need to use JSX and curly braces for evaluation inside our return().
  // It's common practice to prefix the name of an event handler function with `handle`. Any props containing that function will be prefixed with `on`. This is because the prop will be used when the event occurs, but the function itself is what actually handles the necessary actions. It also ensures the names are similar enough to easily determine which props and functions correspond, yet different enough to determine when we're referencing a function and when we're referencing a prop containing a function.
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail
        ticket={this.state.selectedTicket}
        onClickingDelete={this.handleDeletingTicket}
        onClickingEdit={this.handleEditClick}
      />
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      buttonText = "Add Ticket";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
      {/* But what is `this`? In this case, we are going to be rendering an object that's an instance of the TicketControl component. this refers to the specific instance that is being rendered.
      Note that we don't use this with functional components - just class components.  */}
      </React.Fragment>
    );
  }
}

export default TicketControl;