import axios from "axios";
import {
  PRODUCT_CART_SUCCESS,
  PRODUCT_CART_FAILURE,
  PRODUCT_CART_REQUEST,
} from "./actionType";

export const getCartSuccess = (payload) => {
  return { type: PRODUCT_CART_SUCCESS, payload };
};

export const cartRequest = () => {
  return { type: PRODUCT_CART_REQUEST };
};

export const cartFailure = () => {
  return { type: PRODUCT_CART_FAILURE };
};

export const getAllCart = () => (dispatch) => {
  dispatch(cartRequest());
  axios
    .get("https://light-ant-sock.cyclic.app/products")
    .then((res) => {
      dispatch(getCartSuccess(res.data));
    })
    .catch((err) => {
      dispatch(cartFailure());
    });
};
export const removeItemCart = (id) => (dispatch) => {
  dispatch(cartRequest());
  axios
    .delete(`https://light-ant-sock.cyclic.app/products/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
