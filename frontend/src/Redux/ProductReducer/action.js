import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  SORT_DATA_ASC,
  SORT_DATA_DESC,
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

export const sortdata=()=>{
  return {type:SORT_DATA_ASC}
}

export const sortdataDes=()=>{
  return {type:SORT_DATA_DESC}
}

export const getProductData= (dispatch) => {
  dispatch(getRequestMovie());
  axios
    .get(`https://light-ant-sock.cyclic.app/products`)
    .then((res) => {
       console.log("redux",res.data);
      dispatch(getSuccessMovie(res.data));
      console.log(res.data)
    })
    .catch((e) => {
      dispatch(getFailureMovie());
    });
};


export const sortAsc=()=>(dispatch)=>{
  console.log('sort ');
    dispatch(sortdata())
}

export const sortDesc=()=>(dispatch)=>{
  console.log('sort desc');
    dispatch(sortdataDes())
}


