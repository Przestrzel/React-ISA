import { Team } from './teamsType';

export type Players = {
  id: string;
};

export type Player = {
  id: string;
  fullName: string;
  age: number;
  height: number;
  weight: number;
  position: string;
  value: number;
  nationality: string;
  team: Team;
};
