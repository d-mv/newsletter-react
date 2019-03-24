export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'SELECT_MODULE':
      return action.payload;
    default:
      return state;
  }
};
