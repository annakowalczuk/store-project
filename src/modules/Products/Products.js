import React from "react";
import Product from '../Product/ProductContainer';

import { Container, Row, Col } from 'reactstrap';

export const Products = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {props.products.map(product => 
          <Col lg='6' key={product._id}>
            <Product product={product} />
          </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
