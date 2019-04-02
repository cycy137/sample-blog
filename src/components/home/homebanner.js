import React from 'react';
import '../../css/home/homebanner.css';

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-me">
          <div className="home-banner-photo">
            <img src={require('../../img/simpsons_PNG71.png')} alt="my" />
          </div>
          <div className="home-banner-desc">
            <h1>Bart</h1>
            <p>A simple blog just for sample</p>

            <div className="home-banner-link">
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/cycy137">Github</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yi-cui-77960b64/">Linked In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
