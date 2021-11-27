const apiUrl = process.env.REACT_APP_API_URL;

const config = {
  endpoints: {
    teams: {
      teams: `${apiUrl}/api/teams`,
      teamName: `${apiUrl}/api/teams/:teamName`,
    },
    players: {
      teamPlayers: `${apiUrl}/api/teams/:teamName/players`,
      teamPlayerId: `${apiUrl}/api/teams/:teamName/players/:id`,
    },
  },
};

export default config;
