import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    const { artsActions } = this.props;

    artsActions.getArts();
  }

  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

export default Home;
