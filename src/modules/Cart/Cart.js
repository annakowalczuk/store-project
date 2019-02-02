import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import isEmpty from 'lodash/isEmpty';

import './Cart.scss';


export const Cart = (props) => {

  const renderCartIsEmpty = () => {
    return (
      <Row>
        <Col lg='12'>
          <p>Your cart is empty.</p>
        </Col>
      </Row>
    );
  }

  const renderAddedItems = () => {
    const addedItems = Object.keys(props.cart);

    return (
      <div>
      {addedItems.map(id => {
        const addedItem = props.products.find(product => product._id === id);
        const imgUrl = `/images/${addedItem.index}.jpg`;

        return (
        <Row key={id} >
          <Col lg='2'>
            <div className='cart-photo-product' style={{ backgroundImage: `url(${imgUrl})` }} >
            </div>
          </Col>
          <Col lg='7'>
            <h4>{addedItem.name}</h4>
            <p>{addedItem.description}</p>
          </Col>
          <Col lg='1'>
            <p>{addedItem.price}</p>
          </Col>
          <Col lg='2'>
            <div onClick={() => props.removeItemFromCart(id)} >-</div>
            <div>{props.cart[id]}</div>
            <div onClick={() => props.addToCart(id)} >+</div>
            <div>szt</div>
            <div onClick={() => props.removeProductFromCart(id) } >usuń produkt</div>
          </Col>
        </Row>
      );}
      )}
      </div>
    );
  }

  const renderTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(props.cart).map(id => {
      const addedItem = props.products.find(product => product._id === id);
      return totalPrice += addedItem.price * props.cart[id];
    })

    return (
      <p>${totalPrice}</p>
    );
  }

  return (
    <div className='section--cart'>
      <Container>
        <Row>
          <Col lg='12' className='cart-header'>
            <h2>Koszyk</h2>
          </Col>
        </Row>
        { isEmpty(props.cart) ? renderCartIsEmpty() : renderAddedItems() }

        <Row>
          <Col lg='4'>
            <p>kod rabatowy</p>
          </Col>
          <Col lg='4'>
            <h6>Total</h6>
            {renderTotalPrice()}
          </Col>
          <Col lg='4'>
            <h2 onClick={() => props.checkoutRequest()} >Zapłać</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
