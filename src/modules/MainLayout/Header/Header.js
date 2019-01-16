import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from './Logo';
import Cart from './Cart';

import './Header.css'; 

export const Header = props => {
  return (
    <div>
      <Logo />
      <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
        <NavLink exact to='/terms' activeClassName='active'>Regulamin</NavLink>
        <NavLink exact to='/contact' activeClassName='active'>Kontakt</NavLink>
      </nav>
      <Cart />
    </div>
  );
};
