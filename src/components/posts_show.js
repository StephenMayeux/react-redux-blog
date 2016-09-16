import React, { Component } from 'react';

class PostsShow extends Component {
  render() {
    return (
      <div>This is a single post for {this.props.params.id}!</div>
    );
  }
}

export default PostsShow;
