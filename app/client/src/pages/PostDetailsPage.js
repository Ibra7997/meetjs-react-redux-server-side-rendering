import React from 'react';

import Header from '../components/Header';
import PostDetails from '../containers/PostDetailsContainer';


const PostDetailsPage = props => (
  <div>
    <Header type="post-details" />
    <PostDetails id={props.params.id} />
  </div>
);

PostDetailsPage.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
  }),
};


PostDetailsPage.fetchData = PostDetails.fetchData;

export default PostDetailsPage;
