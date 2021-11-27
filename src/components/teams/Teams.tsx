import React, { useEffect, useState } from 'react';

import { teamsService } from '../../services/teams.service';
import { Team } from '../../constants/teamsType';

const Teams = () => {
  const [teams, setTeams] = useState<Team[] | null>(null);

  useEffect(() => {
    (async () => {
      const teamsResponse = await teamsService.getTeams();
      setTeams(teamsResponse.data.teams);
    })();
  }, []);

  return (
    <div>
      {teams
        ? teams.map(team => <div key={team.name}>{team.name}</div>)
        : 'There are no teams'}
    </div>
  );
};

export default Teams;
