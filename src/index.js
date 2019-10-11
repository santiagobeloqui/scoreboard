import React, { useState } from "react";
import ReactDOM from "react-dom";
import PlayerAdder from "./PlayerAdder/PlayerAdder";
import PlayersContext from "./PlayersContext";

import "./styles.css";

function App() {
  const [showAdder, setShowAdder] = useState(true);
  const [players] = useState([]);
  return (
    <div className="App">
      <h1>Scoreboard</h1>
      <PlayersContext.Provider value={players}>
        <PlayerAdder show={showAdder} />
        <div>{players}</div>
        <button
          onClick={() => {
            return setShowAdder(false);
          }}
          style={{ display: showAdder ? "visible" : "none" }}
        >
          Start
        </button>
      </PlayersContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
