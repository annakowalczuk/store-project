import React from 'react';
import './Product.scss';

const Product = (props) => {

  const { product } = props;
  const imgUrl = require(`../../data/images/${product.index}.png`);

  const renderAdditionalInfo = () => {
    return (
      product.additional_info
    );
  }
  return (
    <div className='product-box' >
      <div className='top-info'>
      {product.additional_info ? renderAdditionalInfo() : null }
      </div>
      <div className='photo-product' style={{ backgroundImage: `url(${imgUrl})` }} >
      </div>
      <div className='bottom-info'>
        <div>
          <div className='product-name' >{product.name}</div>
          <div className='product-price' >${product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
