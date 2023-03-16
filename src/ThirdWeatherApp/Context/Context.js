import React, { createContext, useReducer } from "react";

import reducer from "./Reducers";
const details = createContext(null);
const dispatchAction = createContext(null);

let initial_Val = [];
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
