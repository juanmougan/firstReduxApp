// All reducers receive two args
// Reducers only get called when an action occurs
// 'state' argument is NOT application state
// it's same state that was produced by this reducer (previously)
// e.g. if it was a counter, this state would contain: 1, 2, ...
// state = null defaults a state undefined to null
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      // don't mutate state here
      return action.payload;
  }
  // base case: if we don't care about the action, just return state
  return state
}
