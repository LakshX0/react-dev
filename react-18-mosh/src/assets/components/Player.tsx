import { useState } from "react";

const Player = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Lakshan",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { name: "Kamal" } });
  };
  return (
    <div>
      Player Details
      <p>{game.id}</p>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Change Prop</button>
    </div>
  );
};

export default Player;
