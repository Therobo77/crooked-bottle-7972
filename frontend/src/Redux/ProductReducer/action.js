
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getRequestMovie = () => {
  return { type: GET_DATA_REQUEST };
};

export const getSuccessMovie = (payload) => {
  return { type: GET_DATA_SUCCESS, payload };
};

export const getFailureMovie = () => {
  return { type: GET_DATA_FAILURE };
};

export const getProductData = (dispatch) => {
  
  console.log("22");
  dispatch(getRequestMovie());
  axios
    .get(`https://dummyjson.com/products`)
    .then((res) => {
      console.log("26");
      console.log(res.products);
      dispatch(getSuccessMovie(res.data.products));
    })
    .catch((e) => {
      dispatch(getFailureMovie());
    });
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks

