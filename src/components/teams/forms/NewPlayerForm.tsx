import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { playersService } from '../../../services/players.service';

type PlayerInput = {
  fullName: string;
  age: number;
  height: number;
  weight: number;
  position: string;
  value: number;
  nationality: string;
};

interface NewPlayerFormProps {
  teamName: string;
}

const NewPlayerForm: React.FC<NewPlayerFormProps> = ({ teamName }) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmitHandler: SubmitHandler<PlayerInput> = async (
    data: PlayerInput
  ) => {
    await playersService.addPlayer(teamName, { ...data, teamName });
    history.go(0);
  };

  return (
    <div>
      <div className='form-title'>Add player</div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='form-row'>
          <div className='form-input'>
            <div>
              <label>Name</label>
            </div>
            <input {...register('fullName')} type='text'></input>
          </div>

          <div className='form-input'>
            <div>
              <label>Age</label>
            </div>
            <input {...register('age')} type='number'></input>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-input'>
            <div>
              <label>Height</label>
            </div>
            <input {...register('height')} type='text'></input>
          </div>
          <div className='form-input'>
            <div>
              <label>Weight</label>
            </div>
            <input {...register('weight')} type='text'></input>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-input'>
            <div>
              <label>Position</label>
            </div>
            <input {...register('position')} type='text'></input>
          </div>
          <div className='form-input'>
            <div>
              <label>Value</label>
            </div>
            <input {...register('value')} type='number'></input>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-input'>
            <div>
              <label>Nationality</label>
            </div>
            <input {...register('nationality')} type='text'></input>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-submit'>
            <div></div>
            <button type='submit'>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPlayerForm;
