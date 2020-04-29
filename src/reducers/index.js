import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;

// The default state for our rootReducer is:
// {
//   masterTicketList: {},
//   formVisibleOnPage: false
// }