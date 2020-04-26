import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
  // Looking at our test above, our expectation should be clear. If our current state is an empty object {} and we do nothing to it (the action type is null), then the reducer should return the current state {}.
  
});