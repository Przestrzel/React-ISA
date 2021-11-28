import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { playersService } from '../../services/players.service';
import { Player } from '../../constants/playersType';

import './PlayersComponent.scss';

interface PlayersComponentProps {
  teamName: string;
}

const PlayersComponent: React.FC<PlayersComponentProps> = ({ teamName }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    (async () => {
      const playersReponse = await playersService.getPlayers(teamName);
      setPlayers(playersReponse.data.players);
    })();
  }, [teamName]);

  return (
    <div className='player-container'>
      {players.length
        ? players.map(player => (
            <Link
              to={`/teams/${teamName}/players/${player.id}`}
              key={player.id}>
              <div key={player.fullName} className='player'>
                <div className='player-description'>Player name:</div>
                <div className='player-name'>{player.fullName}</div>
              </div>
            </Link>
          ))
        : 'There are no players'}
    </div>
  );
};

export default PlayersComponent;
