import { connect } from 'react-redux';

import PostsList from '../components/PostsList';


const mapStateToProps = state => (
  {
    postsList: state.posts.postsList,
  }
);

export default connect(mapStateToProps)(PostsList);
