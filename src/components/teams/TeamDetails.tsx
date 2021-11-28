import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { teamsService } from '../../services/teams.service';
import { Team } from '../../constants/teamsType';

interface RouteParams {
  teamName: string;
}

interface TeamDetailsProps extends RouteComponentProps<RouteParams> {}

const TeamDetails: React.FC<TeamDetailsProps> = props => {
  const teamName = props.match.params.teamName;

  const [team, setTeam] = useState<Team>();

  useEffect(() => {
    (async () => {
      const teamResponse = await teamsService.getTeam(teamName);
      setTeam(teamResponse.data.team);
    })();
  }, [teamName]);
  if (team) {
    console.log(team);
  }
  return (
    <div>
      Details about the <span>{teamName}</span>
      {team?.name}
    </div>
  );
};

export default TeamDetails;
