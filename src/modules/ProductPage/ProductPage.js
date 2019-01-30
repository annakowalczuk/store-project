import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import './ProductPage.scss';

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderLoading = () => {
    return (
        <Row>
          <Col lg='12'>...loading</Col>
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
            <button className='button-add-to-cart'>Dodaj do koszyka</button>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <div className='section--product-page'>
        <Container>
            { !this.props.product ? this.renderLoading() : this.renderDetails() }
        </Container>
      </div>
  );
}
}
