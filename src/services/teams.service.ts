import { TeamsResponse, TeamResponse } from '../constants/teamsResponse';
import axios from 'axios';
import config from '../utils/config';

const getTeams = (): Promise<TeamsResponse> =>
  axios.get(config.endpoints.teams.teams);

const getTeam = (teamName: string): Promise<TeamResponse> =>
  axios.get(config.endpoints.teams.teamName.replace(':teamName', teamName));

const deleteTeam = (teamName: string): unknown =>
  axios.delete(config.endpoints.teams.teamName.replace(':teamName', teamName));

const updateTeam = (teamName: string, data: { budget: number }): unknown =>
  axios.put(
    config.endpoints.teams.teamName.replace(':teamName', teamName),
    data
  );

export const teamsService = {
  getTeams,
  getTeam,
  updateTeam,
  deleteTeam,
};
