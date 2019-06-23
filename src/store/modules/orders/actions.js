import {CheckoutFailure, CheckoutRequest, CheckoutSuccess} from './constants';
import client from '../../../network';

export function checkout(data) {
  return (dispatch, getState) => {
    dispatch({type: CheckoutRequest, data});
    
    client.post('/api/orders', { data })
      .then(response => {
        dispatch({type: CheckoutSuccess, data, order: response.data.order});
      }).catch(error => {
      dispatch({type: CheckoutFailure, data, error: error.response.data.error});
    });
  };
}
