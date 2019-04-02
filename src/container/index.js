import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomeHeader from '../components/home/homeheader';
import HomeFooter from '../components/home/homefooter';
import Home from './home';
import Blog from './blog';
import Demo from './demo';
import About from './about';

export default class Index extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <HomeHeader />
          <div className="middle">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/demo" component={Demo} />
            <Route path="/about" component={About} />
          </div>
          <HomeFooter />
        </div>
      </HashRouter>
    );
  }
}