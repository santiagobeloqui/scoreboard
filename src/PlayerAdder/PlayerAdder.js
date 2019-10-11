import React, { useContext } from "react";
import PlayerAdderTemplate from "./PlayerAdderTemplate";
import PlayersContext from "../PlayersContext";

const PlayerAdder = props => {
  const players = useContext(PlayersContext);
  const addPlayer = () => {
    players.push(
      <div>
        <p>Santiago</p>
        <p>10</p>
      </div>
    );
  };
  if (props.show === true) {
    return <PlayerAdderTemplate onAddClick={addPlayer} />;
  }
  return null;
};

export default PlayerAdder;
