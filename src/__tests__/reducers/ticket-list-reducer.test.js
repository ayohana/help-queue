import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';
import Moment from 'moment';

describe('ticketListReducer', () => {

  let action;
  
  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    timeOpen : 0,
    id: 1
  };

  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1 
    },
    2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
  // Looking at our test above, our expectation should be clear. If our current state is an empty object {} and we do nothing to it (the action type is null), then the reducer should return the current state {}.

  // test('Should successfully add new ticket data to masterTicketList', () => {
  //   const { names, location, issue, id } = ticketData;
  //   action = {
  //     type: 'ADD_TICKET',
  //     names: names,
  //     location: location,
  //     issue: issue,
  //     id: id
  //   };

  //   expect(ticketListReducer({}, action)).toEqual({
  //     [id] : {
  //       names: names,
  //       location: location,
  //       issue: issue,
  //       id: id
  //     }
  //   });
  // });

  // test('Should successfully update a ticket data using ADD_TICKET action', () => {
  //   action = {
  //     type: 'ADD_TICKET',
  //     names: "Bob and Amy",
  //     location: "E1",
  //     issue: "Help!",
  //     id: 1
  //   };

  //   expect(ticketListReducer(currentState, action)).toEqual({
  //     1: {
  //       names: "Bob and Amy",
  //       location: "E1",
  //       issue: "Help!",
  //       id: 1
  //     },
  //     2: {
  //       names: 'Jasmine and Justine',
  //       location: '2a',
  //       issue: 'Reducer has side effects.',
  //       id: 2 
  //     }
  //   });
  // });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };

    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    });
  });

  test('Should add a formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(ticketListReducer({ [id] : ticketData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  // test('should successfully add a ticket to the ticket list that includes Moment-formatted wait times', () => {
  //   const { names, location, issue, timeOpen, id } = ticketData;
  //   action = {
  //     type: 'ADD_TICKET',
  //     names: names,
  //     location: location,
  //     issue: issue,
  //     timeOpen: timeOpen,
  //     id: id,
  //     formattedWaitTime: new Moment().fromNow(true)
  //   };
  //   expect(ticketListReducer({}, action)).toEqual({
  //     [id] : {
  //       names: names,
  //       location: location,
  //       issue: issue,
  //       timeOpen: timeOpen,
  //       id: id,
  //       formattedWaitTime: 'a few seconds'
  //     }
  //   });
  // });

});