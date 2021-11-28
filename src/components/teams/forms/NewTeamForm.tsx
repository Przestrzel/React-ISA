import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { teamsService } from '../../../services/teams.service';

import '../../../utils/FormStyle.scss';

type TeamInputs = {
  name: string;
  budget: number;
};

const NewTeamForm = () => {
  const { register, handleSubmit } = useForm<TeamInputs>();
  const history = useHistory();

  const onSubmitHandler: SubmitHandler<TeamInputs> = async (
    data: TeamInputs
  ) => {
    await teamsService.addTeam(data);
    history.go(0);
  };

  return (
    <div>
      <div className='form-title'>Add new team</div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='form-input'>
          <div>
            <label>Team name</label>
          </div>
          <input {...register('name')} type='text'></input>
        </div>
        <div className='form-input'>
          <div>
            <label>Team budget</label>
          </div>
          <input {...register('budget')} type='number'></input>
        </div>
        <div className='form-submit'>
          <div></div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default NewTeamForm;
