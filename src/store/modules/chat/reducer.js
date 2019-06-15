import {
  FetchMessagesRequest, FetchMessagesSuccess, FetchMessagesFailure,
  WebsocketConnected, WebsocketDisconnected,
  Message,
} from './constants';

const initialState = {
  isWebsocketConnected: false,
  messages: {
    fetching: false,
    list: []
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FetchMessagesRequest:
      return {
        ...state,
        messages: {
          ...state.messages,
          fetching: true
        }
      };
    case FetchMessagesSuccess:
      return {
        ...state,
        messages: {
          ...state.messages,
          list: action.messages.concat(state.messages.list),
          fetching: false
        }
      };
    case FetchMessagesFailure:
      return {
        ...state,
        messages: {
          ...state.messages,
          fetching: false,
        }
      };
    case WebsocketConnected:
      return { ...state, isWebsocketConnected: true };
    case WebsocketDisconnected:
      return { ...state, isWebsocketConnected: false };
    case Message:
      return {
        ...state,
        messages: {
          ...state.messages,
          list: state.messages.list.concat(action.message),
          fetching: false
        }
      };
    default:
      return state;
  }
}
