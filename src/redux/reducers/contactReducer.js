const initialState = [
  {
    id: 0,
    name: "kushagra",
    number: 8299446479,
    email: "kusharin@gmail.com",
  },
  {
    id: 1,
    name: "agnihotri",
    number: 7233073548,
    email: "kusharsaan@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updatedState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatedState;
      return state;
    case "DELETE_CONTACT":
      const filteredState = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filteredState;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
