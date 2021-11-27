import { Team, Teams } from './teamsType';

export type TeamResponse = {
  config: unknown;
  data: { team: Team };
  headers: unknown;
  status: number;
  statusText: string;
};

export type TeamsResponse = {
  config: unknown;
  data: { teams: Teams[] };
  headers: unknown;
  status: number;
  statusText: string;
};
