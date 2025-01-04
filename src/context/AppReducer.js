const AppReducer = (state, action) => {
  switch (action.type) {
    // Remove a transaction by ID
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    // Add a new transaction
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    // User signup (updates user data in state)
    case "USER_SIGNUP":
      return {
        ...state,
        user: action.payload,
      };

    // User login (stores logged-in user data in state)
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    // User logout (clears user data from state)
    case "USER_LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default AppReducer;