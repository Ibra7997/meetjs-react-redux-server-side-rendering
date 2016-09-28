import React, { Component } from 'react';

import { fetchPost } from '../actions/posts';

class PostDetails extends Component {
  componentDidMount() {
    const { post } = this.props.activePost;
    const { dispatch } = this.props;
    if (!post) {
      dispatch(fetchPost(this.props.postId));
    }
  }

  componentWillUnmount() {
    this.props.resetMe();
  }

  render() {
    const { post, loading, error } = this.props.activePost;
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if (error) {
      return <div className="alert alert-danger">{ error.message }</div>;
    } else if (!post) {
      return <span />;
    }

    return (
      <div className="container">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
}

PostDetails.propTypes = {
  postId: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  resetMe: React.PropTypes.func.isRequired,
  activePost: React.PropTypes.shape({
    post: React.PropTypes.object,
    loading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.object,
  }),
};

PostDetails.fetchData = (store, params) => store.dispatch(fetchPost(params.id));

export default PostDetails;
