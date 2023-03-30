import PropTypes from 'prop-types';
import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

export default Title;

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: '',
};
