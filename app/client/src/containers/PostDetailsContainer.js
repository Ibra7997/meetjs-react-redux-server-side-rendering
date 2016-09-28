import { connect } from 'react-redux';

import PostDetails from '../components/PostDetails';
import { resetActivePost } from '../actions/posts';


function mapStateToProps(globalState, ownProps) {
  return { activePost: globalState.posts.activePost, postId: ownProps.id };
}

const mapDispatchToProps = dispatch => (
  {
    resetMe: () => {
      dispatch(resetActivePost());
    },
    dispatch,
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
