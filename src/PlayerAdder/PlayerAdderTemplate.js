import React from "react";
import "./PlayerAdder.css";

const PlayerAdderTemplate = props => {
  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="number" placeholder="Initial Score" />
      <button
        onClick={() => {
          props.onAddClick();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default PlayerAdderTemplate;
