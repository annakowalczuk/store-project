import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkoutRequest } from '../CartActions';
import CartIsEmpty from '../CartIsEmpty';

import { Container, Row, Col, Table } from 'reactstrap';
import isEmpty from 'lodash/isEmpty';

import './CartSubmit.scss';

const CartSubmit = (props) => {

  const renderAddedItems = () => {
    const addedItems = Object.keys(props.cart);

    return (
      <Table>
        <thead>
          <tr>
            <th></th>
            <th className='table-header' >Nazwa produktu</th>
            <th className='table-header' >Ilość</th>
            <th className='table-header' >Cena</th>
          </tr>
        </thead>
        <tbody>
          {addedItems.map((id, index) => {
            const addedItem = props.products.find(product => product._id === id);
            const imgUrl = `/images/${addedItem.index}.jpg`;

            return (
                <tr key={index}>
                  <th scope="row">
                      <img className='checkout-item-photo' src={imgUrl} alt={addedItem.name}/>
                  </th>
                  <td className='table-body-text'>
                  {addedItem.name}
                  </td>
                  <td className='table-body-text'>
                  {props.cart[id]}szt
                  </td>
                  <td className='table-body-text'>
                  ${addedItem.price}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    );
  }

  const renderTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(props.cart).map(id => {
      const addedItem = props.products.find(product => product._id === id);
      return totalPrice += addedItem.price * props.cart[id];
    })

    return totalPrice;
  }

  return (
    <div className='section--cart-submit'>
      <Container>
        <Row>
          <Col lg='12' className='cart-header'>
            <h2>Podsumowanie</h2>
          </Col>
        </Row>
        <Row>
          <Col lg='12'>
          { isEmpty(props.cart) ? <CartIsEmpty /> : renderAddedItems() }
          </Col>
        </Row>
        <Row className='cart-checkout-menu'>
          <Col lg='3' className='total-price'>
            <h6>Do zapłaty: </h6>
            ${renderTotalPrice()}
          </Col>
          <Col lg='3'>
            <button 
              className={`button-cart-checkout${isEmpty(props.cart) ? ' disabled' : ''}`}
              onClick={() => isEmpty(props.cart) ? null : props.checkoutRequest()} 
            >Zamów i zapłać</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

CartSubmit.propTypes={
products: PropTypes.array,
cart: PropTypes.object,
addToCart: PropTypes.func,
removeItemFromCart: PropTypes.func,
removeProductFromCart: PropTypes.func,
checkoutRequest: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutRequest: () => dispatch(checkoutRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSubmit);
