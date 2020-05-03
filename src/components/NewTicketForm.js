import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
// import Moment from 'moment';
// import { v4 } from 'uuid';
import { useFirestore } from 'react-redux-firebase'

function NewTicketForm(props){

  // We add the useFirestore() HOOK to make Firestore methods available to our component
  const firestore = useFirestore();

  function addTicketToFirestore(event) {
    event.preventDefault();
    props.onNewTicketCreation();
    return firestore.collection('tickets').add({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      timeOpen: firestore.FieldValue.serverTimestamp()
      // Firebase does not support Moment library so we will use Firebase to create a timestamp instead.
      // We remove IDs because Firebase will create IDs for our tickets.
    });
  }

  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={addTicketToFirestore} buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;