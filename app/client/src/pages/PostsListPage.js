import React from 'react';

import Header from '../components/Header';
import PostsList from '../containers/PostsListContainer';


const PostsListPage = () => (
  <div>
    <Header type="post-list" />
    <PostsList />
  </div>
);

PostsListPage.fetchData = PostsList.fetchData;

export default PostsListPage;
