import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missions__mission-card">
        <p data-testid="mission-name">
          { name }
        </p>
        <p data-testid="mission-year">
          { year }
        </p>
        <p data-testid="mission-country">
          { country }
        </p>
        <p data-testid="mission-destination">
          { destination }
        </p>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: '',
  year: undefined,
  country: '',
  destination: '',
};
