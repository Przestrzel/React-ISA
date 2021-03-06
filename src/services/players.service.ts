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

const addPlayer = (teamName: string, data: any): unknown =>
  axios.post(
    config.endpoints.players.teamPlayers.replace(':teamName', teamName),
    data
  );

const deletePlayer = (teamName: string, id: string): unknown =>
  axios.delete(
    config.endpoints.players.teamPlayerId
      .replace(':teamName', teamName)
      .replace(':id', id)
  );

const updatePlayer = (teamName: string, id: string, data: any): unknown =>
  axios.put(
    config.endpoints.players.teamPlayerId
      .replace(':teamName', teamName)
      .replace(':id', id),
    data
  );

export const playersService = {
  getPlayers,
  getPlayer,
  updatePlayer,
  deletePlayer,
  addPlayer,
};
