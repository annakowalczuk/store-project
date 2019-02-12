import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortBy } from '../Product/ProductActions.js';

import './Sort.scss';

const Sort = (props) => {
  return (
      <div>
        <h5 className='sort-header' >Sortuj:</h5>
        <div className='sort-list'>
          <div className='sort-list-item' onClick={() => props.sortBy('name', 'asc')} >Nazwa A-Z</div>
          <div className='sort-list-item' onClick={() => props.sortBy('name', 'desc')} >Nazwa Z-A</div>
          <div className='sort-list-item' onClick={() => props.sortBy('price', 'asc')}>Cena rosnąco</div>
          <div className='sort-list-item' onClick={() => props.sortBy('price', 'desc')} >Cena malejąco</div>
        </div>
      </div>
    );
}

Sort.PropTypes = {
  sortBy: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortBy: (key, order) => dispatch(sortBy(key, order)),
  }
};

export default connect(null, mapDispatchToProps)(Sort);
