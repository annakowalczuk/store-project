import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';
import { Container, Row, Col } from 'reactstrap';

export const Footer = props => {
  return (
    <div className='section--footer'>
      <Container>
        <Row>
          <Col md='12' lg='5' className='rights-info'>
            <div>All rights reserved</div>
          </Col>
          <Col md='12' lg='7' className='bottom-menu'>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
              <NavLink exact to='/terms' activeClassName='active'>Regulamin</NavLink>
              <NavLink exact to='/contact' activeClassName='active'>Contact</NavLink>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
