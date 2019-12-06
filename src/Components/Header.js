import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeader from '../components/styles/StyledHeader';

const Header = props => {
  const today = new Date();
  const currentMonth = today.toLocaleString('en-us', { month: 'long' });
  let button = props.title ? (
    <div>
      <Link to="/" className="logout">
        {'<'}
      </Link>
      <span>{props.title}</span>
    </div>
  ) : (
    <div>
      <Link to="/logout" className="logout">
        Logout
      </Link>
      <button>&lt;</button>
      <button>{currentMonth}</button>
      <button>&gt;</button>
      <Link to="/add" className="add">
        +
      </Link>
    </div>
  );

  return <StyledHeader>{button}</StyledHeader>;
};

export default Header;
