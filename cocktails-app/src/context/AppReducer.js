export default function appReducer(state, action) {
  switch (action.type) {
    case "SAVE_DRINK":
      return {
        ...state,
        drinkOption: action.payload,
      };
    case "CONSULT_DRINK":
      return {
        ...state,
        consult: action.payload,
      };

    default:
      return state;
  }
}
