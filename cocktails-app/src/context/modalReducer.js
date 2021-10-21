export default function modalReducer(state, action) {
  switch (action.type) {
    case "SAVE_IDRECIPE":
      return {
        ...state,
        idrecipe: action.payload,
      };
    case "SAVE_RECIPE":
      return {
        ...state,
        newrecipe: action.payload,
      };

    default:
      return state;
  }
}
