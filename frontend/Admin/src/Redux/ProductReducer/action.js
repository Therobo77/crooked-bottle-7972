import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getRequestProduct = () => {
  return { type: GET_DATA_REQUEST };
};
export const postProductSuccess = (payload) => {
  return { type: POST_PRODUCT_SUCCESS };
};

export const getSuccessProduct = (payload) => {
  return { type: GET_DATA_SUCCESS, payload };
};

export const getFailureProduct = () => {
  return { type: GET_DATA_FAILURE };
};

export const deleteProductSuccess = (payload) => {
  return { type: DELETE_PRODUCT_SUCCESS };
};

export const getProductData = (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .get(`http://localhost:7070/products`)
    .then((res) => {
      console.log(res.data);
      dispatch(getSuccessProduct(res.data));
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
export const addProduct = (payload) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .post("http://localhost:7070/products", payload)
    .then(() => {
      dispatch(postProductSuccess());
    })
    .catch((err) => {
      dispatch(getFailureProduct());
    });
};
export const deleteProductData = (id) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .delete(`http://localhost:7070/products/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
