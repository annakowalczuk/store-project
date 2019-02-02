import React from 'react';
import { Link } from 'react-router-dom';
import './CartIcon.scss';

const CartIcon = (props) => {
  return (
    <div className='cart-icon-container'>
    <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
    </div>
    );
};

export default CartIcon;
