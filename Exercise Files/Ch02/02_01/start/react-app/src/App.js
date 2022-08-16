import './App.css';
// import { useState, useEffect } from "react";
import { useReducer } from "react";

function App() { // <--- destructuring
  // const [emotion, setEmotion] = useState("happy");
  // const [secondary, setSecondary] = useState("tired");

  // useEffect(() => {
  //   console.log(`It's ${emotion} around here!`);
  // }, [emotion]);

  // useEffect(() => {
  //   console.log(`It's ${secondary} around here!`);
  // }, [secondary]);

  const [checked, setChecked] = useReducer(
    checked => !checked,
    false
  );

  return (
    <div className="App">
      {/* <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
      <h2>
        Current secondary emotion is {secondary}.
      </h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button> */}

      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>{checked ? "Checked" : "Not Checked"}</label>
    </div>
  );
}

export default App;
