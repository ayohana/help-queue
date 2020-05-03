import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  firestore: firestoreReducer
});

export default rootReducer;

// The default state for our rootReducer is:
// {
//   masterTicketList: {},
//   formVisibleOnPage: false
// }