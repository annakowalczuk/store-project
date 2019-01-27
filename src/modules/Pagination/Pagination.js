import React from 'react';
import { connect } from 'react-redux';
import { goToPage } from '../Product/ProductActions';

import { Container, Row, Col } from 'reactstrap';


const Pagination = (props) => {
  const productsPerPage = 6;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const fetchPageNumbers = () => {

  // }
  
  const handleClick = (e) => {
    props.goToPage(e.target.id);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg='6'></Col>
          <Col lg='6'>
            <ul>
              {pageNumbers.map(number =>
                <li
                  key={number}
                  id={number}
                  onClick={handleClick}
                >
                  {number}
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    currantPage: state.products.currantPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToPage: (id) => dispatch(goToPage(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
