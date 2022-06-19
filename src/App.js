import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [result, setResult] = useState("");
  function buttonHandler(event) {
    var input = result.concat(event.target.name);
    setResult(input);
  }

  function clearInput() {
    setResult("");
  }

  function backSpace() {
    setResult(result.slice(0, result.length - 1));
  }

  function finalResult() {
    try {
      setResult(eval(result).toString());
    } catch (Exception) {
      setResult("Error");
    }
  }
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div class="input-result">
        <input class="input-input" value={result}></input>
      </div>
      <div class="container">
        <button onClick={clearInput} id="clear">
          AC
        </button>

        <button onClick={backSpace} id="backspace">
          C
        </button>

        <button name="/" id="operator" onClick={buttonHandler}>
          &divide;
        </button>
        <button name="*" id="operator" onClick={buttonHandler}>
          &times;
        </button>
        <button name="-" id="operator" onClick={buttonHandler}>
          &ndash;
        </button>
        <button name="+" id="operator" onClick={buttonHandler}>
          +
        </button>

        <button name="7" onClick={buttonHandler}>
          7
        </button>

        <button name="8" onClick={buttonHandler}>
          8
        </button>

        <button name="9" onClick={buttonHandler}>
          9
        </button>

        <button name="4" onClick={buttonHandler}>
          4
        </button>
        <button name="5" onClick={buttonHandler}>
          5
        </button>
        <button name="6" onClick={buttonHandler}>
          6
        </button>

        <button name="1" onClick={buttonHandler}>
          1
        </button>

        <button name="2" onClick={buttonHandler}>
          2
        </button>
        <button name="3" onClick={buttonHandler}>
          3
        </button>

        <button name="0" onClick={buttonHandler}>
          0
        </button>
        <button name="." onClick={buttonHandler}>
          .
        </button>

        <button name="=" id="operator-result" onClick={finalResult}>
          =
        </button>
      </div>
    </div>
  );
}
