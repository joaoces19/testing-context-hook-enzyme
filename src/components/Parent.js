import "../App.css";
import Child from "./Child";

export default function Parent() {
    return <div className="parent">
        <h2>Parent</h2>
        <div style={{ display: "flex" }}>
            <Child/>
        </div>
    </div>
}