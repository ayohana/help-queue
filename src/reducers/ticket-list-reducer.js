export default (state = {}, action) => {

  const { names, location, issue, id } = action;
  
  switch (action.type) {

    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id] : {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
      // We use Object.assign() to clone the state object.
      // Object.assign() must take three arguments:
        // 1st param — The target object to copy to.
        // 2nd param — The first source object from which to copy properties.
        // 3rd param — The second source object from which to copy properties.

      // The first argument must be an empty object {}. Otherwise, Object.assign() will directly mutate the state we pass in instead of making a clone of it first. We don't want to do that!
      // The second argument is the object that will be cloned. In the reducer action above, it's the ticket list state we pass into our function.
      // The third argument is the change that should be made to our new copy. This will always be the new ticket that should be added to our ticket list state.

      // We return the value from Object.assign(). Our reducer hasn't altered anything. Instead, it made a copy of the state that was passed in as argument, altered the copy, and then returned the altered copy so it can be used elsewhere in our code.

    case 'DELETE_TICKET':
      const newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;
  }
};
// Our function has two parameters. The first is the state that will need to be changed while the second is the action that will be applied to that state.
// Our first parameter has a default value. This is an ES6 feature. We can pass default arguments as parameters to functions. That way, if an argument isn't passed into the parameter when the function is called, the function can just use the default.
// Note that our export statement includes default because this file will only have one function inside it - the reducer for our ticket list. That way, when we import the reducer into our test or anywhere else, we can store all the code directly inside a single variable such as ticketListReducer.