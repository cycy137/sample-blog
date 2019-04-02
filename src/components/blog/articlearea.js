import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './articlelist';
import ArticlePaging from './articlepaging';
import '../../css/blog/articlearea.css';

const ArticleBanner = () => (
  <div className="blog-article-banner">
    <h2>Welcome to my blog</h2>
    <p>just a little sample....</p>
  </div>
);

export default class ArticleArea extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      defaultPageSize: 8,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    if (this.props.issues.length === 0) {
      return null;
    }
    return (
      <div className="archive-list-area">
        <ArticleBanner />
        <ArticleList issues={this.props.issues} defaultPageSize={this.state.defaultPageSize} pageNumber={this.state.currentPage} />
        <ArticlePaging handlePageChange={this.handlePageChange} total={this.props.issues.length} defaultPageSize={this.state.defaultPageSize} />
      </div>
    );
  }
}

ArticleArea.defaultProps = {
  issues: null,
};

ArticleArea.propTypes = {
  issues: PropTypes.array,
};
