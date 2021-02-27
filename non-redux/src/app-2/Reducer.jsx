import React, { useState, useReducer } from "react";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "increament":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decreament":
      return {
        ...state,
        count: state.count - 1,
      };
    case "initCount":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const initaialState = {
  count: 0,
};

const Reducer = () => {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunc, initaialState);

  return (
    <div>
      <h1>APP</h1>

      <div>
        <label>Start Count</label>
        <input
          type='number'
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
        />
        <br />
        <button onClick={() => dispatch({ type: "initCount", payload: input })}>
          Initialize Counter
        </button>
      </div>

      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increament" })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: "decreament" })}>
        decreament
      </button>
    </div>
  );
};

export default Reducer;
