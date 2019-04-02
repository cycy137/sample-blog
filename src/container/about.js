import React from 'react';
import '../css/about/about.css';

export default class About extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
        <div className="main-container about-container">
          <div className="about-detial about-desc">
            <h1>About me</h1>
            <ul>
              <li>Over 4 years of professional experience</li>
              <li>orking with the Software Development Life Cycle (SDLC)</li>
              <li>or User Interface Development and RESTful Web Application</li>
              <li>as a Software Developer</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-contact">
            <h1>Connect me</h1>
            <ul>
              <li>Linked In：<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yi-cui-77960b64/">Linked In</a></li>
              <li>Github：<a target="_blank" rel="noopener noreferrer" href="https://github.com/cycy137">GitHub</a></li>
              <li>Email： cycy135@outlook.com</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-friend">
            <h1>Links</h1>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="#">Google</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="#">Microsoft</a></li>
            </ul>
          </div>


        </div>
      </div>
    );
  }
}