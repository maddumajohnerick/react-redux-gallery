import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {

  }

  render() {
    const { art } = this.props;

    return (
      <div className="col-md-3">
        <div className="col-md-12 art-container">
          {/* <img src={art ? art.src : ''} /> */}
          <div className="image-container" style={{ backgroundImage: `url(${art ? art.src : ''})`}}>
            <div className="info-container">
              <div className="text-holder">
                {art.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
