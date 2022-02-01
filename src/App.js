/* exported App */

import "./App.css";

import Keypad from "./Keypad";
import React from "react";
//import { Button } from "bootstrap";

function App() {
  // const [newState, setNewState] = React.useState(0);

  const [state, setState] = React.useState({
    result: "",
  });

  //  const addNumber = () => {
  //  setNewState(newState + 1);
  // };

  const reset = () => {
    setState({
      result: "",
    });
  };

  const calculate = () => {
    var checkResult = "";
    if (state.result.includes("-")) {
      checkResult = state.result.replace("-", "-");
    } else {
      checkResult = state.result;
    }
    try {
      setState({
        // eslint-disable-next-line no-eval
        result: (eval(checkResult) || "0") + "",
      });
    } catch (e) {
      setState({
        result: "error",
      });
    }
  };

  function onClick(button) {
    if (button === "=") {
      calculate();
    } else if (button === "AC") {
      reset();
    } else {
      setState({
        result: state.result + button,
      });
    }
  }

  return (
    <div>
      <div className="calculator-body">
        <div>
          <h1>Simple Calculator</h1>
          <h2 class="myname">By Steven Searcy</h2>
        </div>
        <Keypad onClick={onClick} result={state.result} />
      </div>
    </div>
  );
}

export default App;
