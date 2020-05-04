import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { // our DEFAULT STATE
      // formVisibleOnPage: false, // a local state
      selectedTicket: null,
      editing: false
      // Each of these properties is a state slice. A state slice is a piece of state that can be mutated independently of other state slices.
    }; 
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    ); // interval delay is 1000 ms = 1 second
  }

  componentDidUpdate() { // triggered each time a change is made to the UI. The timer has no effect on it.
    console.log("component updated!");
  }

  componentWillUnmount(){
    console.log("component unmounted!");
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterTicketList).forEach(ticket => {
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = a.updateTime(ticket.id, newFormattedWaitTime);
      dispatch(action);
    });
  }

  // Because this method uses arrow notation, this is automatically bound to its current lexical scope, which is an instance of the class itself. (An ES6 feature)
  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    // const action1 = a.addTicket(newTicket);
    // dispatch(action1);
    // We no longer use addTicket action anymore because the Firestore reducer is handling that now.
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedTicket = (id) => {
    // const selectedTicket = this.props.masterTicketList[id];
    // this.setState({selectedTicket: selectedTicket});
    this.props.firestore.get({
      collection: 'tickets',
      doc: id
    }).then((ticket) => {
      const firestoreTicket = {
        names: ticket.get("names"),
        location: ticket.get("location"),
        issue: ticket.get("issue"),
        id: ticket.id
      }
      // then() is chained to a promise.
      // Our promise here returns a DocumentSnapshot - a Firestore object that contains read-only data of a specified document.
      this.setState({selectedTicket: firestoreTicket});
    });
  }

  handleDeletingTicket = (id) => {
    this.props.firestore.delete({
      collection: 'tickets', 
      doc: id
    });
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTicketInList = () => {
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

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
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
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

// TicketControl.propTypes = {
//   masterTicketList: PropTypes.object
// };

const mapStateToProps = state => {
  return {
    // masterTicketList: state.masterTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default withFirestore(TicketControl);
// withFirestore gives our component the ability to use Firestore functionalities