import React from "react";
import Product from '../Product/ProductContainer';

import { Container, Row, Col } from 'reactstrap';
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { CSSTransitionGroup } from 'react-transition-group';
import '../../utils/_animations.scss';

export const Products = (props) => {
  return (
      <div>
        <Container>
          <Row>
            {props.products.map(product => 
            <Col lg='6' key={product._id}>
              <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionAppear={true}
                transitionAppearTimeout={1000}
                >
                  <Product product={product} />
              </CSSTransitionGroup>
            </Col>
            )}
          </Row>
        </Container>


      </div>
  );
}
