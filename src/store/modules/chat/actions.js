import client from '../../../network';

import {
  FetchMessagesRequest, FetchMessagesSuccess, FetchMessagesFailure,
} from './constants';

export function fetchMessages() {
  return (dispatch, getState) => {
    dispatch({type: FetchMessagesRequest});
    
    const state = getState();
    const token = state.token;
    
    client.get('/api/messages', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      dispatch({type: FetchMessagesSuccess, messages: response.data.messages});
    }).catch(error => {
      dispatch({type: FetchMessagesFailure, error: error.response.data.error});
    });
  }
}
