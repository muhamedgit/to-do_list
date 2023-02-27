import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputRow from "./Container/InputRow/InputRow";

function App() {
  return (
    <div className="mainContainer">
      <h1>Mohi's to-do list</h1>
      <InputRow />
    </div>
  );
}

export default App;
