import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from '../productConstants/cartConstants';

const addToCart = (qty, product) => async (dispatch) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      _id: product._id,
      name: product.name,

      price: product.price,

      qty: qty ? qty : 0,
    },
  });
};

const removeFromCart = (id) => async (dispatch) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
};

export { addToCart, removeFromCart };
