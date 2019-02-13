import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';
import './ProductPage.scss';

export class ProductPage extends Component {
  renderError = () => {
    return (
        <Row>
          <Col lg='12'>Nie ma takiego produktu.</Col>
        </Row>
    );
  }

  renderDetails = () => {
    const {product} = this.props;
    const imgUrl = `/images/${product.index}.jpg`;

    return (
      <Container>
        <Row>
          <Col lg='4'>
            <div className='product-page-image-wrapper'>
              <div className='product-page-image' style={{ backgroundImage: `url(${imgUrl})` }} >
              </div>
            </div>
          </Col>
          <Col lg='8'>
            <div className='product-page-details' >
              <h2 className='product-page-details-name'>{product.name}</h2>
              <h4 className='product-page-details-price'>${product.price}</h4>
              <p className='product-page-details-description'>{product.description}</p>
            </div>
            <button className='button-add-to-cart' onClick={() => this.props.addToCartHandler(product._id)} >Dodaj do koszyka</button>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <div className='section--product-page'>
        <Container>
            { !this.props.product ? this.renderError() : this.renderDetails() }
        </Container>
      </div>
  );
}
}

ProductPage.propTypes = {
  product: PropTypes.object,
  addToCartHandler: PropTypes.func,
}
