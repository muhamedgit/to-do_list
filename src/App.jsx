import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputRow from "./Container/InputRow/InputRow";
import TaskBox from "./Container/TaskBox/TaskBox";

function App() {
  return (
    <div className="mainContainer">
      <h1>Mohi's to-do list</h1>
      <InputRow />
      <TaskBox />
    </div>
  );
}

export default App;
