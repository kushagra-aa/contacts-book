const initialState = [
  ...(localStorage.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts"))
    : []),
];

const contactReducer = (state = initialState, action) => {
  if (!localStorage.getItem("contacts")) initialState.pop();
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      localStorage.setItem("contacts", JSON.stringify(state));
      return state;
    case "UPDATE_CONTACT":
      const updatedState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatedState;
      localStorage.setItem("contacts", JSON.stringify(state));
      return state;
    case "DELETE_CONTACT":
      const filteredState = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filteredState;
      localStorage.setItem("contacts", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default contactReducer;
