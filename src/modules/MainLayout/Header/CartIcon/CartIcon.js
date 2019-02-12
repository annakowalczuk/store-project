import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartIcon.scss';

const CartIcon = (props) => {

  const renderItemsInCart = () => {
    return (
      <div className='itemsInCart' >{props.itemsInCart}</div>
    );
  }

  return (
    <div className='cart-icon-container'>
    <Link to="/cart" title='cart' ><i className="fas fa-shopping-cart"></i></Link>
    { props.itemsInCart === 0 ? null : renderItemsInCart() }
    </div>
    );
};

const mapStateToProps = (state) => {
  return {
    itemsInCart: Object.values(state.cart).reduce((a,b) => a + b, 0),
  };
};

export default connect(mapStateToProps)(CartIcon);
