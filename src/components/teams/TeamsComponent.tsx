import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { teamsService } from '../../services/teams.service';
import { Teams } from '../../constants/teamsType';

import './TeamsComponent.scss';

const TeamsComponent = () => {
  const [teams, setTeams] = useState<Teams[]>([]);

  useEffect(() => {
    (async () => {
      const teamsResponse = await teamsService.getTeams();
      setTeams(teamsResponse.data.teams);
    })();
  }, []);

  return (
    <div>
      <div className='team-manager'>Teams to manage</div>
      {teams.length
        ? teams.map(team => (
            <Link to={`team/${team.name}`} key={team.name}>
              <div key={team.name} className='team'>
                <div className='team-description'>Team name:</div>
                <div className='team-name'>{team.name}</div>
              </div>
            </Link>
          ))
        : 'There are no teams'}
    </div>
  );
};

export default TeamsComponent;
