import { TeamsResponse } from '../constants/teamsResponse';
import axios from 'axios';
import config from '../utils/config';

const getTeams = (): Promise<TeamsResponse> =>
  axios.get(config.endpoints.teams.teams);

export const teamsService = {
  getTeams,
};
