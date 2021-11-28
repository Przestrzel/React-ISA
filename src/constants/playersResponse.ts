import { Player } from './playersType';

export type PlayerResponse = {
  config: unknown;
  data: Player;
  headers: unknown;
  status: number;
  statusText: string;
};

export type PlayersResponse = {
  config: unknown;
  data: { players: Player[] };
  headers: unknown;
  status: number;
  statusText: string;
};
