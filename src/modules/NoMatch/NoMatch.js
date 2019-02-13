import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const NoMatch = (props) => {
  return (
    <Container>
      <Row>
        <Col lg='12'>
          <div>Ups, nie znaleziono strony</div>
        </Col>
      </Row>
    </Container>
  );
}
