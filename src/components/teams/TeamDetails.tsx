import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { teamsService } from '../../services/teams.service';
import { Team } from '../../constants/teamsType';

import './TeamDetails.scss';
import '../../utils/FormStyle.scss';
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
      setTeam(teamResponse.data);
    })();
  }, [teamName]);

  let content = <p>Wait for it</p>;
  if (team) {
    content = (
      <div>
        <form>
          <div className='form-input'>
            <div>
              <label>Team budget</label>
            </div>
            <input type='number'></input>
          </div>
          <div className='form-submit'>
            <div></div>
            <button type='submit'>Change</button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className='team-details'>
      <div className='team-details__name'>{teamName}</div>
      {content}
    </div>
  );
};

export default TeamDetails;
