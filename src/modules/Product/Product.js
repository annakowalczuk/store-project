import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }
  
  renderAdditionalInfo = () => {
    return (
      this.props.product.additional_info
    );
  }
  
  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    const { product } = this.props;
    // url for images rendering
    const imgUrl = `/images/${product.index}.jpg`;

    return (
      <div>
        <div className={(this.state.isHovering === true) ? 'product-box active' : 'product-box'}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
          <div className='top-info'>
            <div>
              {product.additional_info ? this.renderAdditionalInfo() : null }
            </div>
            <div>
              <i className="far fa-heart"></i>
            </div>
          </div>
          <div className='photo-product' style={{ backgroundImage: `url(${imgUrl})` }} >
          </div>
          <div className='bottom-info'>
            <div>
              <div className='product-name' >{product.name}</div>
              <div className='product-price' >${product.price}</div>
            </div>
            <div className='addToCart'>
              <span>Add to cart</span>
              <i className="fas fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
