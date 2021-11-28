import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import { playersService } from '../../services/players.service';
import { Player } from '../../constants/playersType';

import './PlayersComponent.scss';
import DeleteSVG from '../../images/delete.svg';

interface PlayersComponentProps {
  teamName: string;
}

const PlayersComponent: React.FC<PlayersComponentProps> = ({ teamName }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const playersReponse = await playersService.getPlayers(teamName);
      setPlayers(playersReponse.data.players);
    })();
  }, [teamName]);

  const deletePlayer = async (id: string, event: React.FormEvent<{}>) => {
    event.preventDefault();
    await playersService.deletePlayer(teamName, id);
    history.go(0);
  };

  return (
    <div className='player-container'>
      {players.length
        ? players.map(player => (
            <div key={player.id}>
              <Link to={`/teams/${teamName}/players/${player.id}`}>
                <div key={player.fullName} className='player'>
                  <div className='player-description'>Player name:</div>
                  <div className='player-name'>{player.fullName}</div>
                </div>
              </Link>
              <form onSubmit={deletePlayer.bind(this, player.id)}>
                <button className='delete-logo' type='submit'>
                  <img src={DeleteSVG} alt='Trash' />
                </button>
              </form>
            </div>
          ))
        : 'There are no players'}
    </div>
  );
};

export default PlayersComponent;
