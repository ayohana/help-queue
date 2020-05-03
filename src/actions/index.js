import * as c from './../actions/ActionTypes';

// ACTION CREATORS ================================

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

// export const addTicket = (ticket) => {
//   const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;
//   return {
//     type: c.ADD_TICKET,
//     names: names,
//     location: location,
//     issue: issue,
//     id: id,
//     formattedWaitTime,
//     timeOpen: timeOpen
//   }
// }

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});