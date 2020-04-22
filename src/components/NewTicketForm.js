import React from 'react';
import { v4 } from 'uuid';
// v4 refers to the method in the UUID library responsible for creating unique IDs.
// There are a few available methods: For instance, v1() creates an ID based on timestamp while v5() uses the object's namespace to generate an ID.

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
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

export default NewTicketForm;