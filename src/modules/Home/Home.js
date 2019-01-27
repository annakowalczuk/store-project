import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from '../Sort';
import ProductsContainer from '../Products/ProductsContainer';
import Pagination from '../Pagination';

import { Container, Row, Col } from 'reactstrap';
import './Home.scss';

class Home extends Component {

  render() {
    return (
      <div className='section--products'>
        <Container>
          <Row>
            <Col lg='4' className='products-sort' >
              <Sort />
            </Col>
            <Col lg='8' className='products-container'>
              <ProductsContainer products={this.props.products} />
              <Pagination />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
