import PropTypes from 'prop-types';
import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="title">
        <h2>{ headline }</h2>
        <hr />
      </div>
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
