import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";

function App() {
  return (
    <div className="App">
      <div
        style={{
          "text-align": "left",
          backgroundColor: "lightgrey",
        }}
      >
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn to use <br />
          the most popular frontend library <br />
          and become a super Ninja developer.
        </p>

        <button>Awesome</button>
      </div>
      <div style={{ display: "inline-flex", marginTop: "30%" }}>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
    </div>
  );
}

export default App;
