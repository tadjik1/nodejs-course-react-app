import {
  FetchRecommendationsRequest, FetchRecommendationsSuccess, FetchRecommendationsFailure
} from './constants';

const initialState = {
  recommendations: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FetchRecommendationsRequest:
      return state;
    case FetchRecommendationsSuccess:
      return { ...state, recommendations: action.recommendations, };
    case FetchRecommendationsFailure:
      return state;
    default:
      return state;
  }
}
