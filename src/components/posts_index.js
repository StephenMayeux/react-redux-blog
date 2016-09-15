import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
      </div>
        List of blog posts:
      </div>
    );
  }
}

// could eliminate this function and simply pass in an object
// to the connect funtion below, like this:
// connect(null, { fetchPosts })(PostsIndex)
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
