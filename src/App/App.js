import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCorral from '../components/GoatCorral/goatCorral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  };

  render() {
    return (
      <div className="App">
        <button className="btn btn-danger">Bootstrap Button</button>
        <GoatCorral butts={this.state.goats} freeGoat={this.freeGoat} />
      </div>
    );
  }
}

export default App;
