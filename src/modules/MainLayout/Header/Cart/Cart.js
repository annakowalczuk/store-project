import React from 'react';
import CartIcon from './cart-icon.png';

import './Cart.scss';

const Cart = (props) => {
  return (
    <div className='cart-icon-container'>
      <img src={CartIcon} className='cart-icon' alt='cart icon' />
    </div>
    );
};

export default Cart;
