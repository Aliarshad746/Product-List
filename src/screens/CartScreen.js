import React from 'react';
import { Container, ListGroup, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Cartproducts from '../components/CartProducts';
const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Container className="my-5 shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <Message>
          Your Cart is Empty <Link to="/">Go Back</Link>
        </Message>
      ) : (
        <Row>
          <Col md={8}>
            <ListGroup variant="flush" className=" my-3">
              {cartItems.map((item) => {
                return <Cartproducts item={item} key={item._id} />;
              })}
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card className="my-3 shadow-lg p-3 mb-5 bg-white rounded">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p className="d-flex justify-content-end">
                    Your Total of (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) Items
                    is :
                  </p>
                  <p className="d-flex justify-content-end font-weight-bold">
                    {'  '}${' '}
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className="btn btn-block">Proceed to Checkout</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartScreen;
