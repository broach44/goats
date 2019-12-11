import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
  }
  // Another option of the below function
  // getGoatCount = () => {
  //   const { goats } = this.props;
  //   return goats.filter((g) => !g.isBusy).length;
  // }

  getGoatCount = () => {
    const myGoats = this.props.butts;
    let availableGoats = 0;
    myGoats.forEach((goat) => {
      if (goat.isBusy === false) {
        availableGoats += 1;
      }
    });
    return availableGoats;
  };

  render() {
    return (
      <h2 className="availGoats">{this.getGoatCount()} goats available</h2>
    );
  }
}
export default AvailableGoats;
