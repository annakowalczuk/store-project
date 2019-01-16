import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = props => {
  return (
    <div>
      <nav>
        <p>All rights reserved</p>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
        <NavLink exact to='/terms' activeClassName='active'>Regulamin</NavLink>
        <NavLink exact to='/contact' activeClassName='active'>Contact</NavLink>
      </nav>
    </div>
  );
};
