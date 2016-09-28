import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostsList from './pages/PostsListPage';
import PostDetails from './pages/PostDetailsPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsList} />
    <Route path="posts/:id" component={PostDetails} />
  </Route>
);
