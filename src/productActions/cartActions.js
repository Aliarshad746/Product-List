import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from '../productConstants/cartConstants';

const addToCart = (qty, product) => async (dispatch) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product._id,
      name: product.name,

      price: product.price,

      qty,
    },
  });
};

export { addToCart };
