const initialReducerValue = {
  history: [],
  liked: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_HISTORY":
      return { ...state, history: action.payload };
    case "SET_LIKED":
      return { ...state, liked: action.payload };
    default:
      return state;
  }
};

export { initialReducerValue, appReducer };
