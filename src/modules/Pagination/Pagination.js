import React from 'react';
import { connect } from 'react-redux';
import { goToPage } from '../Product/ProductActions';

import { Container, Row, Col } from 'reactstrap';
import './Pagination.scss';


const Pagination = (props) => {

  const currentPage = Number(props.currentPage)
  const productsPerPage = 6;
  const totalPages = Math.ceil(props.products.length / productsPerPage);
  
  const renderPagination = () => {
    let paginationItems = [];
    
    const numberOfPaginationItems = 5;
    let firstPaginationItem = currentPage - 2;
    let lastPaginationItem = firstPaginationItem + numberOfPaginationItems - 1;
    
    if (currentPage <= numberOfPaginationItems / 2) {
      firstPaginationItem = 1;
      lastPaginationItem = numberOfPaginationItems;
    }
    if (currentPage > totalPages - numberOfPaginationItems / 2) {
      lastPaginationItem = totalPages;
      firstPaginationItem = lastPaginationItem - numberOfPaginationItems + 1;
    }

    for (let i = firstPaginationItem; i <= lastPaginationItem; i++) {
      paginationItems.push(renderPaginationItem(i));
    }

    return paginationItems;
  }

  const renderPaginationItem = (number) => {
    return (
    <li
      key={number}
      className={ currentPage === number ? 'product-pagination-item active' : 'product-pagination-item' }
      id={number}
      onClick={() => props.goToPage(number)}
    >{number}</li>
    );
  }

  const renderPaginationArrow = (number, type) => {
    const left = 'fas fa-long-arrow-alt-left';
    const right = 'fas fa-long-arrow-alt-right';
    return (
    <li
      key={number}
      className='product-pagination-item'
      id={number}
      onClick={() => props.goToPage(number)}
    >
    <i className={type === 'left' ? left : right}></i>
    </li>
    );
  }

  return (
    <div className='product-pagination' >
      <Container>
        <Row>
          <Col lg='6'></Col>
          <Col lg='6'>
            <ul>
              {(currentPage >= 2) ? renderPaginationArrow(currentPage - 1, 'left') : null}
              {renderPagination()}
              {(currentPage < totalPages) ? renderPaginationArrow(currentPage + 1, 'right') : null}
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
