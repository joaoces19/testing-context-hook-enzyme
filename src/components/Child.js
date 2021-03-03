import '../App.css';
import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export default function Child() {
    const counter = useContext(CounterContext);
    return <div className="child">
        <h3>{"Child"}</h3>
        <p>{"Counter state from context: " + counter}</p>
    </div>
}