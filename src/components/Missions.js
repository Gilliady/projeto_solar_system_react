import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions-container">
        <Title headline="Missões" />
        <div className="missions-container__content" />
        { missions.map(({ name, year, country, destination }) => (<MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />))}
      </div>
    );
  }
}

export default Missions;
