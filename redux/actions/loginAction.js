import axios from 'axios';
import {DO_LOGIN, FETCH_PRODUCT, ON_ERROR} from '../type';

export const onUserLogin = ({email, password}) => {
  return async dispatch => {
    try {
      const response = await axios.post('URL', {email, password});
      dispatch({
        type: DO_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: ON_ERROR, payload: error});
    }
  };
};

export const onFetchData = () => {
  return async dispatch => {
    try {
      const response = {
        data: [
          {name: 'Macbook Pro', price: '$2500'},
          {name: 'iPhone 12', price: '$1000'},
          {name: 'iPad', price: '$600'},
        ],
      };
      dispatch({
        type: FETCH_PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: ON_ERROR, payload: error});
    }
  };
};
