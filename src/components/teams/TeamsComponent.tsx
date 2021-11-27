import React, { useEffect, useState } from 'react';

import { teamsService } from '../../services/teams.service';
import { Teams } from '../../constants/teamsType';

const TeamsComponent = () => {
  const [teams, setTeams] = useState<Teams[] | null>(null);

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

export default TeamsComponent;
