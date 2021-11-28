import { PlayersResponse } from '../constants/playersResponse';
import axios from 'axios';
import config from '../utils/config';

const getPlayers = (teamName: string): Promise<PlayersResponse> =>
  axios.get(
    config.endpoints.players.teamPlayers.replace(':teamName', teamName)
  );

export const playersService = {
  getPlayers,
};
