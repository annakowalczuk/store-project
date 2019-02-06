import React from 'react';
import { connect } from 'react-redux';
import { goToPage } from '../Product/ProductActions';

import { Container, Row, Col } from 'reactstrap';
import './Pagination.scss';


const Pagination = (props) => {
  const {currentPage} = props;
  
  const renderPagination = () => {
    const productsPerPage = 6;
    const totalPages = Math.ceil(props.products.length / productsPerPage);
    console.log(totalPages);
    let paginationItems = [];
    
    let firstPaginationItem = Number(currentPage) - 2;
    let lastPaginationItem = Number(currentPage) + 2;
    
    if (Number(currentPage) === 1) {
      firstPaginationItem = Number(currentPage);
      lastPaginationItem = Number(currentPage) + 4;
    }
    if (Number(currentPage) === 2) {
      firstPaginationItem = Number(currentPage) - 1;
      lastPaginationItem = Number(currentPage) + 3;
    }
    if (Number(currentPage) === totalPages) {
      firstPaginationItem = Number(currentPage) - 4;
      lastPaginationItem = Number(currentPage);
    }
    if (Number(currentPage) === totalPages - 1) {
      firstPaginationItem = Number(currentPage) - 3;
      lastPaginationItem = Number(currentPage) + 1;
    }

    for (let i = firstPaginationItem; i <= lastPaginationItem; i++) {
      paginationItems.push(renderPaginationItem(i));
    }
    return paginationItems;
  }

  const handleClick = (e) => {
    props.goToPage(e.target.id);
  }

  const renderPaginationItem = (number) => {
    return (
    <li
      key={number}
      className={ Number(currentPage) === number ? 'product-pagination-item active' : 'product-pagination-item' }
      id={number}
      onClick={handleClick}
    >{number}</li>
    );
  }

  return (
    <div className='product-pagination' >
      <Container>
        <Row>
          <Col lg='6'></Col>
          <Col lg='6'>
            <ul>
              {renderPagination()}
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
    currentPage: state.products.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToPage: (id) => dispatch(goToPage(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
