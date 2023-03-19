const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "updateCity":
      return { ...state, city: payload[0] };

    case 'dailyData':
      return {...state,daily:payload}

    default:
      return state;
  }
};
export default reducer;
