import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, Row, Col, Button, Form } from 'react-bootstrap';
import { addToCart } from '../productActions/cartActions';

const ListProduct = ({ product }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (qty > 0) {
      dispatch(addToCart(qty, product));
    }
  }, [dispatch, qty, product]);

  return (
    <ListGroup.Item key={product._id}>
      <Row>
        <Col md={5}>
          <p>{product.name}</p>
        </Col>
        <Col md={3}>
          <p>$ {product.price}</p>
        </Col>
        <Col md={4}>
          <Row className="d-flex justify-content-between mb-3 ml-1 mr-3 align-items-center">
            <Button variant="outline-primary" onClick={() => setQty(qty - 1)}>
              -
            </Button>

            {` `}
            <Form.Control
              type="number"
              value={qty < 0 ? setQty(0) : qty}
              onChange={(e) => setQty(+e.target.value)}
              style={{ width: '30%', textAlign: 'center' }}
            ></Form.Control>
            {` `}

            <Button variant="outline-success" onClick={() => setQty(qty + 1)}>
              +
            </Button>
          </Row>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ListProduct;
