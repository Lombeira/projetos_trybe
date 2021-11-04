import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Timer extends React.Component {
  componentDidMount() {
    const { decreaseTime } = this.props;
    const ONE_SECOND = 1000;
    setInterval(() => {
      decreaseTime();
    }, ONE_SECOND);
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        { `${count}` }
      </div>
    );
  }
}

export default connect()(Timer);

Timer.propTypes = {
  decreaseTime: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

Timer.defaultProps = {

};
