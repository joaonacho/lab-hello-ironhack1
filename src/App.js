import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import ironhackLogo from "./ironhack-logo.svg";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "darkblue" }}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <img
          src={ironhackLogo}
          alt="ironhack-logo"
          style={{
            marginTop: "2%",
            width: "3.5rem",
            marginLeft: "5%",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "5%",
        }}
      >
        <h1 style={{ fontSize: "4.5rem", color: "white" }}>
          Say hello to <br /> ReactJS
        </h1>
        <p style={{ fontSize: "1rem", color: "white" }}>
          You will learn to use <br />
          the most popular frontend library <br />
          and become a super Ninja developer.
        </p>

        <button
          style={{
            height: "60px",
            width: "130px",
            color: "darkblue",
            fontSize: "1.2rem",
            backgroundColor: "white",
            borderRadius: "6px",
            marginTop: "2%",
            border: "none",
          }}
        >
          <strong> Awesome!</strong>
        </button>
      </div>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-evenly",
          marginTop: "5%",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
    </div>
  );
}

export default App;
