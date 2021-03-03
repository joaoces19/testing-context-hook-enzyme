import './App.css';
import { useCallback, useState } from "react";
import CounterContext from "./context/CounterContext";
import Parent from "./components/Parent";

function App() {
  const [counter, setCounter] = useState(0);
  const onMinusClick = useCallback(() => setCounter(counter - 1), [counter]);
  const onPlusClick = useCallback(() => setCounter(counter + 1), [counter]);

  return (
    <div className="container">
      <h1>Main</h1>
      <span>
        <button className="minus" onClick={onMinusClick}>
          -
        </button>
        <button className="plus" onClick={onPlusClick}>
          +
        </button>
      </span>
      <br/>
      <p>Current state: {counter}</p>
      <CounterContext.Provider value={counter}>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
