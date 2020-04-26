export default (state = {}, action) => {
  return state;
};

// Our function has two parameters. The first is the state that will need to be changed while the second is the action that will be applied to that state.
// Our first parameter has a default value. This is an ES6 feature. We can pass default arguments as parameters to functions. That way, if an argument isn't passed into the parameter when the function is called, the function can just use the default.
// Note that our export statement includes default because this file will only have one function inside it - the reducer for our ticket list. That way, when we import the reducer into our test or anywhere else, we can store all the code directly inside a single variable such as ticketListReducer.