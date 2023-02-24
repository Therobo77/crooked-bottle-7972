import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  SORT_DATA_ASC,
  SORT_DATA_DESC,
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
    case GET_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
     case SORT_DATA_ASC:
      return {...state, products:state.products.sort((a,b)=>a.price-b.price)} 
      case SORT_DATA_DESC:
        return {...state, products:state.products.sort((a,b)=>b.price-a.price)} 

      
    default:
      return state;
  }
};
