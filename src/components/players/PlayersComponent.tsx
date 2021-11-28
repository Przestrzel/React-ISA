import React, { useState, useEffect } from 'react';

import { playersService } from '../../services/players.service';
import { Player } from '../../constants/playersType';

interface PlayersComponentProps {
  teamName: string;
}

const PlayersComponent: React.FC<PlayersComponentProps> = ({ teamName }) => {
  const [players, setPlayers] = useState<Player[]>();

  useEffect(() => {
    (async () => {
      const playersReponse = await playersService.getPlayers(teamName);
      setPlayers(playersReponse.data.players);
    })();
  }, [teamName]);

  return <div></div>;
};

export default PlayersComponent;
