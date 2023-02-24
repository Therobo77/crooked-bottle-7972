import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_PRODUCT_SUCCESS,
} from "./actionType";

const inti = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = inti, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_DATA_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case GET_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
