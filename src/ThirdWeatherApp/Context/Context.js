import React, { createContext, useReducer } from "react";

import reducer from "./Reducers";
const details = createContext(null);
const dispatchAction = createContext(null);

let initial_Val = {
  city: {
    city: "Bangalore",
    lat: "12.9699",
    lng: "77.5980",
    country: "India",
    iso2: "IN",
    admin_name: "Karnātaka",
    capital: "admin",
    population: "13707000",
    population_proper: "8443675",
  },
  current: "",
  daily: "",
};
const ContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_Val);

  return (
    <details.Provider value={state}>
      <dispatchAction.Provider value={dispatch}>
        {children}
      </dispatchAction.Provider>
    </details.Provider>

    //   OR WE CAN USE SINGLE PROVIDE AS WELL like this -

    // <details.Provider value={state,dispatch}>
    //   {children}
    // </details.Provider>
  );
};

export default ContextComponent;

export { details };
export { dispatchAction };
