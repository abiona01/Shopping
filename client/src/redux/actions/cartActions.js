import * as actionTypes from '../types/cartTypes';
import axios from 'axios';
import { BASE_ROUTE } from './productAction';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://${BASE_ROUTE}/api/products/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
