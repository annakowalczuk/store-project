import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';
import isEmpty from 'lodash/isEmpty';

import './Cart.scss';


export const Cart = (props) => {

  const renderCartIsEmpty = () => {
    return (
      <Row>
        <Col lg='12'>
          <p className='cart-empty' >Your cart is empty.</p>
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
          <Row key={id} className='cart-added-item' >
            <Col lg='2' xs='6'>
              <Link to={`/productpage/${addedItem._id}`} >
                <div className='cart-photo-product-wrapper'>
                  <div className='cart-photo-product' style={{ backgroundImage: `url(${imgUrl})` }} >
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg='7' className='info-wrapper'>
              <div className='cart-added-item-info'>
                <h4 className='cart-added-item-name'>{addedItem.name}</h4>
                <p className='cart-added-item-description'>{addedItem.description.slice(0, 150) + '...'}</p>
              </div>
            </Col>
            <Col xs='6' lg='3' className='price-quantity-remove-wrapper' >
              <div className='cart-added-item-price'>
                <p>${addedItem.price}</p>
              </div>
              <div>
                <div className='cart-added-item-quantity'>
                  <div onClick={() => props.removeItemFromCart(id)} >-</div>
                  <div className='cart-added-item-quantity-number'>{props.cart[id]}</div>
                  <div onClick={() => props.addToCart(id)} >+</div>
                  <div className='cart-added-item-quantity-text'>szt</div>
                </div>
                <div className='cart-added-item-remove' onClick={() => props.removeProductFromCart(id) } >usuń produkt</div>
              </div>
            </Col>
          </Row>
          );
        })
      }
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

        <Row className='cart-checkout-menu'>
          <Col lg='3'>
            <div className='discount-code'>
              <input type="text"
                autoFocus
                defaultValue='kod rabatowy' 
              />
            </div>
          </Col>
          <Col lg='3' className='total-price'>
            <h6>Total: </h6>
            {renderTotalPrice()}
          </Col>
          <Col lg='3'>
            <button 
              className={`button-checkout${isEmpty(props.cart) ? ' disabled' : ''}`}
              onClick={() => isEmpty(props.cart) ? null : props.checkoutRequest()} 
            >Zapłać</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Cart.PropTypes={
  products: PropTypes.array,
  cart: PropTypes.object,
  addToCart: PropTypes.func,
  removeItemFromCart: PropTypes.func,
  removeProductFromCart: PropTypes.func,
  checkoutRequest: PropTypes.func,
};
