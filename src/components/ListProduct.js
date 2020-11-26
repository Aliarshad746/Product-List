import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import { addToCart } from '../productActions/cartActions';

const ListProduct = ({ product }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addToCart(qty, product));
  };
  return (
    <ListGroup.Item key={product._id}>
      <Row>
        <Col md={1}>
          <p>{product._id}</p>
        </Col>
        <Col md={4}>
          <p>{product.name}</p>
        </Col>
        <Col md={2}>
          <p>$ {product.price}</p>
        </Col>
        <Col md={3}>
          <Row>
            <Col md={4}>
              <Button variant="outline-primary" onClick={() => setQty(qty - 1)}>
                -
              </Button>
            </Col>
            <Col md={4}>{qty < 0 ? setQty(0) : qty}</Col>
            <Col md={4}>
              <Button variant="outline-success" onClick={() => setQty(qty + 1)}>
                +
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <Button variant="outline-danger" onClick={clickHandler}>
            Add to cart <i className="fas fa-shopping-cart"></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ListProduct;
