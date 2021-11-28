import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { teamsService } from '../../services/teams.service';
import { Team } from '../../constants/teamsType';
import PlayersComponent from '../players/PlayersComponent';
import NewPlayerForm from './forms/NewPlayerForm';

import './TeamDetails.scss';
import '../../utils/FormStyle.scss';

type TeamInputs = {
  budget: number;
};
interface RouteParams {
  teamName: string;
}

interface TeamDetailsProps extends RouteComponentProps<RouteParams> {}

const TeamDetails: React.FC<TeamDetailsProps> = props => {
  const teamName = props.match.params.teamName;
  const [team, setTeam] = useState<Team>();
  const history = useHistory();

  const { register, handleSubmit, setValue } = useForm<TeamInputs>({
    defaultValues: { budget: 0 },
  });

  useEffect(() => {
    (async () => {
      const teamResponse = await teamsService.getTeam(teamName);
      setTeam(teamResponse.data);
      setValue('budget', teamResponse.data.budget);
    })();
  }, [teamName, setValue]);

  const onSubmitHandler: SubmitHandler<TeamInputs> = async (
    data: TeamInputs
  ) => {
    await teamsService.updateTeam(teamName, data);
    history.go(0);
  };

  let formContent = <p>Wait for it</p>;
  if (team) {
    formContent = (
      <div className='form-group'>
        <div>
          <div className='form-title'>Update team</div>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className='form-input'>
              <div>
                <label>Team budget</label>
              </div>
              <input {...register('budget')} type='number'></input>
            </div>
            <div className='form-submit'>
              <div></div>
              <button type='submit'>Change</button>
            </div>
          </form>
        </div>
        <div>
          <NewPlayerForm teamName={teamName} />
        </div>
      </div>
    );
  }
  return (
    <div className='team-details'>
      <div className='team-details__name'>{teamName}</div>
      {formContent}
      {team ? <PlayersComponent teamName={team.name} /> : null}
    </div>
  );
};

export default TeamDetails;
