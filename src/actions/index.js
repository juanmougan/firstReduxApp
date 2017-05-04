export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an Action
  // an object with a type property
  return {
    // Actions have a type (purpose) and a payload
    type: 'BOOK_SELECTED',    // these types could be pulled to a separate file
    payload: book             // this is the payload
  };
}
