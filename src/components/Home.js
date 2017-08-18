import React, { Component } from 'react';

import Art from '../containers/ArtContainer'

class Home extends Component {
  componentWillMount() {
    const { artsActions } = this.props;

    artsActions.getArts();
  }

  render() {
    const { arts } = this.props;

    return (
      <div className="row">
        {arts && arts.length ?
          arts.map(art => <Art key={art} _id={art}/>)
          :
          ''
        }
      </div>
    );
  }
}

export default Home;
