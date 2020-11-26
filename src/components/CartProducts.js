import React, { useState, useEffect } from 'react';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../productActions/cartActions';

const CartProducts = ({ item }) => {
  const [quantity, setQuantity] = useState(item.qty);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(quantity, item));
  }, [dispatch, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <ListGroup.Item>
      <Row>
        <Col md={3} className="py-2">
          {item.name}
        </Col>
        <Col md={3} className="py-2">
          $ {item.price}
        </Col>
        <Col md={4} className="py-2">
          <Row className="d-flex justify-content-between mb-3 ml-1 mr-3 align-items-center">
            <Button
              variant="outline-primary"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>

            {` `}
            {quantity < 0 ? setQuantity(0) : quantity}
            {` `}

            <Button
              variant="outline-success"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </Row>
        </Col>
        <Col md={2} className="py-2 text-center">
          <Button
            variant="outline-danger"
            onClick={() => removeFromCartHandler(item._id)}
          >
            <DeleteOutlineOutlinedIcon />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartProducts;
