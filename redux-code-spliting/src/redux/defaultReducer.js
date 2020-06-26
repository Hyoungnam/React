export const initialState = {
  open: false,
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OPEN_TRUE":
      return { open: true };
    default:
      return state;
  }
};

export default defaultReducer;
