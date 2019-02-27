import React from 'react';

class WeekScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scoreData: {
        "week": "28",
        "scores": [
            { "homeTeam": "Manchester United" ,"homeTeamScore": 0 ,"awayTeam": "Liverpool" ,"awayTeamScore": 0 }, 
            { "homeTeam": "Arsenal" ,"homeTeamScore": 2 ,"awayTeam": "Southampton" ,"awayTeamScore": 0 }, 
            { "homeTeam": "Burnley" ,"homeTeamScore": 2 ,"awayTeam": "Spurs" ,"awayTeamScore": 1 }, 
            { "homeTeam": "Leicester" ,"homeTeamScore": 1 ,"awayTeam": "Crystal Palace" ,"awayTeamScore": 4 }, 
            { "homeTeam": "West Ham" ,"homeTeamScore": 3 ,"awayTeam": "Fulham" ,"awayTeamScore": 1 }, 
            { "homeTeam": "Cardiff" ,"homeTeamScore": 1 ,"awayTeam": "Watford" ,"awayTeamScore": 5 }
          ]
        }};
  }

  render() {
    return (
      <div>
      </div>
    );
  }  
}

export default WeekScores;