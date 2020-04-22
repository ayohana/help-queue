import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
// v4 refers to the method in the UUID library responsible for creating (random) unique IDs.
// There are a few available methods: For instance, v1() creates an ID based on timestamp while v5() uses the object's namespace to generate an ID.

function NewTicketForm(props){

  // Because a functional component doesn't have this as a reference like a class component, we need to directly refer to the props passed into the functional component. That's why we do props.onNewTicketCreation() instead of this.onNewTicketCreation() (as we'd do if this were a class component).
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4() // creates a unique ID using UUID library
    });
    // console.log(event.target.names.value);
    // console.log(event.target.location.value);
    // console.log(event.target.issue.value);
  }
  // Note that we are taking advantage of event.target. event.target gives us access to the event that was just fired. In this case, we just had a submit event. We can actually grab the values that came from that submit event. Specifically, we can grab the values based on their name property. We just need to call event.target.[input-field-name-goes-here].value.

  return(
    <React.Fragment>
      <h3>This is a form</h3>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names'
        />
        <br />
        <input 
          type='text'
          name='location'
          placeholder='location'
        />
        <br />
        <textarea 
          name='issue'
          placeholder='Describe your issue.'
        />
        <br />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;