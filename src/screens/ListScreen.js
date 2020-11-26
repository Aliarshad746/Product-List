import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import ListProduct from '../components/ListProduct';
import products from '../data/products';

const ListScreen = () => {
  const [value, setValue] = useState(0);
  return (
    <Container className="my-5 shadow-lg p-3 mb-5 bg-white rounded">
      <h1 className="py-2 d-flex justify-content-center mb-4">List Group</h1>
      <ListGroup variant="flush">
        {products.map((product) => {
          return <ListProduct product={product} />;
        })}
      </ListGroup>
    </Container>
  );
};

export default ListScreen;
