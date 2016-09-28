import React from 'react';
import { Link } from 'react-router';


const Header = (props) => {
  const { type } = props;

  switch (type) {
    case 'post-details':
      return (
        <header className="container">
          <h1>
            <Link to={'/'}>Posts</Link>
            <span>&nbsp;&raquo;&nbsp;Post detail</span>
          </h1>
        </header>
      );
    default:
      return (
        <header className="container">
          <h1>Posts</h1>
        </header>
      );
  }
};

Header.propTypes = {
  type: React.PropTypes.string.isRequired,
};

export default Header;
