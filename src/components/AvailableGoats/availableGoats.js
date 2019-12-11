import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
  }


  render() {
    const myGoats = this.props.butts;
    let availableGoats = 0;
    myGoats.forEach((goat) => {
      if (goat.isBusy === false) {
        availableGoats += 1;
      }
    });

    return (
      <h2 className="availGoats">{availableGoats} goats available</h2>
    );
  }
}
export default AvailableGoats;
