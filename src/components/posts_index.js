import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';

class PostIndex extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return <div>List of blog posts</div>
  }
}

export default connect(null, { getPosts: getPosts })(PostIndex);
