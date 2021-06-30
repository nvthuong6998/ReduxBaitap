import {DO_LOGIN, FETCH_PRODUCT, ON_ERROR} from '../type';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
      break;
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
      break;

    case ON_ERROR:
      return {
        ...state,
        appError: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default userReducer;
