/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART } from './types';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});
