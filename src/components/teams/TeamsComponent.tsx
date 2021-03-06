import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import { teamsService } from '../../services/teams.service';
import { Teams } from '../../constants/teamsType';
import NewTeamForm from './forms/NewTeamForm';
import DeleteSVG from '../../images/delete.svg';

import './TeamsComponent.scss';

const TeamsComponent = () => {
  const [teams, setTeams] = useState<Teams[]>([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const teamsResponse = await teamsService.getTeams();
      setTeams(teamsResponse.data.teams);
    })();
  }, []);

  const deleteTeam = async (name: string, event: React.FormEvent<{}>) => {
    event.preventDefault();
    await teamsService.deleteTeam(name);
    history.go(0);
  };

  return (
    <div className='team-container'>
      <div className='team-manager'>Teams</div>
      <NewTeamForm />
      {teams.length
        ? teams.map(team => (
            <div key={team.name}>
              <Link to={`teams/${team.name}`}>
                <div key={team.name} className='team'>
                  <div className='team-description'>Team name:</div>
                  <div className='team-name'>{team.name}</div>
                </div>
              </Link>
              <form onSubmit={deleteTeam.bind(this, team.name)}>
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

export default TeamsComponent;
