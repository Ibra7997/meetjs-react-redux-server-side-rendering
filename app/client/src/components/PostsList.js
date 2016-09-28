/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { Component } from 'react';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/posts';


class PostsList extends Component {
  constructor() {
    super();
    this.posts = [];
  }

  componentDidMount() {
    const { posts } = this.props.postsList;
    const { dispatch } = this.props;
    if (!posts || !posts.length) {
      dispatch(fetchPosts());
    }
  }

  renderPosts() {
    return this.posts.map(post => (
      <li className="list-group-item" key={post._id}>
        <Link to={`posts/${post._id}`}>
          <h3 className="list-group-item-heading">{post.title}</h3>
        </Link>

      </li>)
    );
  }

  render() {
    const { posts, loading, error } = this.props.postsList;
    this.posts = posts;

    if (loading) {
      return <div className="container"><h3>Loading...</h3></div>;
    } else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    }

    return (
      <div className="container">
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

PostsList.propTypes = {
  postsList: React.PropTypes.shape({
    posts: React.PropTypes.array,
    loading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.object,
  }),
  dispatch: React.PropTypes.func.isRequired,
};

PostsList.fetchData = store => store.dispatch(fetchPosts());


export default PostsList;
