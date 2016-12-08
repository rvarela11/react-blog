import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return <div>
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add
        </Link>
      </div>
      List of blog posts
    </div>
  }
}

export default connect(null, { getPosts: getPosts })(PostIndex);
