import React from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../Product/ProductActions.js';

import './Sort.scss';

const Sort = (props) => {
  return (
      <div>
        <h5 className='sort-header' >Sortuj:</h5>
        <div className='sort-list'>
          <ul onClick={() => props.sortBy('name', 'asc')} >Nazwa A-Z</ul>
          <ul onClick={() => props.sortBy('name', 'desc')} >Nazwa Z-A</ul>
          <ul onClick={() => props.sortBy('price', 'asc')}>Cena rosnąco</ul>
          <ul onClick={() => props.sortBy('price', 'desc')} >Cena malejąco</ul>
        </div>
      </div>
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
    sortBy: (key, order) => dispatch(sortBy(key, order)),
  }
};

export default connect(null, mapDispatchToProps)(Sort);
