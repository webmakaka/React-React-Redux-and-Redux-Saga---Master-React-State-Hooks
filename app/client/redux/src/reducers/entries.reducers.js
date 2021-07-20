const initialEntries = [
  {
    id: 1,
    description: 'Work income reducer',
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill reducer',
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent reducer',
    value: 300.0,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill reducer',
    value: 50.0,
    isExpense: true,
  },
];

const reducer = (state = initialEntries, action) => {
  let newEntries;

  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case 'REMOVE_ENTRY':
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;

    default:
      return state;
  }
};

export default reducer;
