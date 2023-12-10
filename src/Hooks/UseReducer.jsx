import React, { useReducer } from "react";

function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1, showText: state.showText };
      case "ToggleText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div id="usereduce">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "ToggleText" });
        }}
      >
        Change
      </button>
      {state.showText && <p> This is a Text </p>}
    </div>
  );
}

export default UseReducer;
