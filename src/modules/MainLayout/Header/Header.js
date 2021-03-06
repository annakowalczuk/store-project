import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from './Logo';
import CartIcon from './CartIcon';

import './Header.scss'; 
import { Container, Row, Col } from 'reactstrap';


export const Header = props => {
  return (
    <div className='section--topnav'>
      <Container>
        <Row>
          <Col md='12' lg='4' className='topnav-logo' >
            <Logo />
          </Col>
          <Col md='12' lg='7' className='topnav-nav' >
            <nav>
              <NavLink exact to='/' className= 'topnav-link' id='topnav-home' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/faq' className= 'topnav-link' activeClassName='active'>FAQ</NavLink>
              <NavLink exact to='/terms' className= 'topnav-link' activeClassName='active'>Regulamin</NavLink>
              <NavLink exact to='/contact' className= 'topnav-link' activeClassName='active'>Kontakt</NavLink>
            </nav>
          </Col>
          <Col md='12' lg='1'>
            <CartIcon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
