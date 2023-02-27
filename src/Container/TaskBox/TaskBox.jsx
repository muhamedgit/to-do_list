import React from "react";
import "./TaskBox.css";

const TaskBox = () => {
  return (
    <div className="taskBoxContainer">
      <div className="task">
        <span>TaskBox 1</span>
      </div>
      <div className="task">
        <span>TaskBox 2</span>
      </div>
      <div className="task">
        <span>TaskBox 3</span>
      </div>
      <div className="task">
        <span>TaskBox 4</span>
      </div>
    </div>
  );
};

export default TaskBox;
