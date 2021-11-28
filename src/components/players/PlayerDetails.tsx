import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { RouteComponentProps } from 'react-router-dom';
import { Player } from '../../constants/playersType';
import { useForm, SubmitHandler } from 'react-hook-form';

import { playersService } from '../../services/players.service';

import './PlayerDetails.scss';

type PlayerInputs = {
  fullName: string;
  age: number;
  height: number;
  weight: number;
  position: string;
  value: number;
  nationality: string;
};
interface RouteParams {
  teamName: string;
  id: string;
}

interface PlayerDetailsProps extends RouteComponentProps<RouteParams> {}

const PlayerDetails: React.FC<PlayerDetailsProps> = props => {
  const [player, setPlayer] = useState<Player>();
  const { register, handleSubmit, setValue } = useForm<PlayerInputs>({
    defaultValues: {
      fullName: '',
      age: 0,
      height: 0,
      weight: 0,
      position: '',
      value: 0,
      nationality: '',
    },
  });
  const history = useHistory();
  const teamName = props.match.params.teamName;
  const id = props.match.params.id;

  const onSubmitHandler: SubmitHandler<PlayerInputs> = async (
    data: PlayerInputs
  ) => {
    await playersService.updatePlayer(teamName, id, data);
    history.go(0);
  };

  useEffect(() => {
    (async () => {
      const playersReponse = await playersService.getPlayer(teamName, id);
      setPlayer(playersReponse.data);
      setValue('fullName', playersReponse.data.fullName);
      setValue('age', playersReponse.data.age);
      setValue('height', playersReponse.data.height);
      setValue('weight', playersReponse.data.weight);
      setValue('position', playersReponse.data.position);
      setValue('value', playersReponse.data.value);
      setValue('nationality', playersReponse.data.nationality);
    })();
  }, [teamName, id, setValue]);

  let formContent = <p>Wait for it</p>;
  if (player) {
    formContent = (
      <div className='single-form'>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className='form-row'>
            <div className='form-input'>
              <div>
                <label>Full name</label>
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
              <button type='submit'>Change</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className='player-details'>
      <div className='team-details__name'>{player?.fullName}</div>
      {formContent}
    </div>
  );
};

export default PlayerDetails;
