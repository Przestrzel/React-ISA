import { Team } from './teamsType';

export type TeamResponse = {
  config: unknown;
  data: { team: Team };
  headers: unknown;
  status: number;
  statusText: string;
};

export type TeamsResponse = {
  config: unknown;
  data: { teams: Team[] };
  headers: unknown;
  status: number;
  statusText: string;
};
