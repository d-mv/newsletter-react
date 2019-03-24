export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'STAR_POST':
      return action.payload;
    default:
      return state;
  }
};
