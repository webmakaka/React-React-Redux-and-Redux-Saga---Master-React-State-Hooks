import entriesTypes from 'actions/entires.actions';

const initialEntries = [];

const reducer = (state = initialEntries, action) => {
  let newEntries;

  switch (action.type) {
    case entriesTypes.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case entriesTypes.REMOVE_ENTRY_RESULT:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;

    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;

    case entriesTypes.POPULATE_ENTRY_DETAILS:
    case entriesTypes.UPDATE_ENTRY:
      console.log('POPULATE_ENTRY_DETAILS ', action.type, action.payload.id);
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      console.log('newEntries ', newEntries);
      return newEntries;

    default:
      return state;
  }
};

export default reducer;
