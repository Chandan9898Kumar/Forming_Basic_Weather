const reducer = (state, action) => {
  console.log("state of reducer", state);
  console.log(action, "action of reducer");

  const { payload } = action;
  
  switch (action.type) {

    case "updateCity":
      return { ...state, city: payload[0]};

    default:
      return state;




  }
};
export default reducer;
