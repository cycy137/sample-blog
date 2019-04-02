import React from 'react';
import DemoCard from '../components/demo/democard';
import '../css/demo/demo.css';

export default class Blog extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
        <div className="main-container demo-container">
          <DemoCard name="React implement TodoList" demo="#" src="#" img="#" />
          <DemoCard name="React implement order menu" demo="#" src="#" img="#" />
          <DemoCard name="React implement target serching" demo="#" src="#" img="#" />
        </div>
      </div>
    );
  }
}