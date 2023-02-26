import {
  PRODUCT_CART_SUCCESS,
  PRODUCT_CART_FAILURE,
  PRODUCT_CART_REQUEST,
} from "./actionType";

const initialState = {
  isLoading: false,
  carts: [],
  cartItem: [],
  totalPrice: 0,
  delivery: 50,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_CART_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case PRODUCT_CART_SUCCESS:
      return { ...state, isLoading: false, carts: payload };
    default:
      return state;
  }
};
