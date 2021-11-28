import { PlayersResponse, PlayerResponse } from '../constants/playersResponse';
import axios from 'axios';
import config from '../utils/config';

const getPlayers = (teamName: string): Promise<PlayersResponse> =>
  axios.get(
    config.endpoints.players.teamPlayers.replace(':teamName', teamName)
  );

const getPlayer = (teamName: string, id: string): Promise<PlayerResponse> =>
  axios.get(
    config.endpoints.players.teamPlayerId
      .replace(':teamName', teamName)
      .replace(':id', id)
  );

export const playersService = {
  getPlayers,
  getPlayer,
};
