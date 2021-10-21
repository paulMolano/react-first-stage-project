export default function usersReducer(state, action) {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SAVE_AUTHUSER":
      return {
        ...state,
        authUser: action.payload,
      };

    default:
      return state;
  }
}
