import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeader from '../components/styles/StyledHeader';

const Header = props => {
  const today = new Date();
  const currentMonth = today.toLocaleString('en-us', { month: 'long' });
  let button = props.title ? (
    <span>{props.title}</span>
  ) : (
    <div>
      <button>&lt;</button>
      <button>{currentMonth}</button>
      <button>&gt;</button>
    </div>
  );

  return (
    <StyledHeader>
      <Link to="/logout" className="logout">
        Logout
      </Link>
      {button}
      <Link to="/add" className="add">
        +
      </Link>
    </StyledHeader>
  );
};

export default Header;
