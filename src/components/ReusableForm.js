import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        {/* Our onSubmit function is now set to a prop called formSubmissionHandler. This is because the form for editing will trigger a different method than the form for creating a new ticket. */}
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <br />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <br />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <br />
        <button type='submit'>{props.buttonText}</button>
        {/* We will want the button for each form to have different text. */}
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;