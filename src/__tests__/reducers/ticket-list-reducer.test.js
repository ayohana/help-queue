import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
  // Looking at our test above, our expectation should be clear. If our current state is an empty object {} and we do nothing to it (the action type is null), then the reducer should return the current state {}.

  test('Should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

});