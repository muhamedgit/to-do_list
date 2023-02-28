import React from "react";
import "./TaskBox.css";

const TaskBox = () => {
  return (
    <div className="taskBoxContainer">
      <div className="task">
        <span>TaskBox 1</span>
        <button className="removeBtn"></button>
      </div>
    </div>
  );
};

export default TaskBox;
