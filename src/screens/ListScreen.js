import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import ListProduct from '../components/ListProduct';
import products from '../data/products';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const ListScreen = () => {
  return (
    <Container className="my-5 shadow-lg p-3 mb-5 bg-white rounded">
      <div className=" py-2 d-flex justify-content-around align-items-center mb-4">
        <div className="d-flex flex-grow-1 justify-content-center">
          <h1 className="">List Group</h1>
        </div>
        <div className="mr-5 ml-1">
          <h2>
            <Link to="/cart" className="btn btn-outline-primary">
              Go to Cart <ShoppingCartOutlined />
            </Link>
          </h2>
        </div>
      </div>

      <ListGroup variant="flush">
        {products.map((product) => {
          return <ListProduct product={product} key={product._id} />;
        })}
      </ListGroup>
    </Container>
  );
};

export default ListScreen;
