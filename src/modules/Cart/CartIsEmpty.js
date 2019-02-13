import React from 'react';
import { Row, Col } from 'reactstrap';


const CartIsEmpty = (props) => {
  return (
    <Row>
      <Col lg='12'>
        <p className='cart-empty' >Your cart is empty.</p>
      </Col>
    </Row>
  );
}

export default CartIsEmpty;
