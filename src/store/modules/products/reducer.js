import {
  FetchRecommendationsSuccess,
  FetchProductsByCategorySuccess,
  FetchProductsByQueryRequest,
  FetchProductsByQuerySuccess,
} from './constants';

const initialState = {
  recommendations: [],
  byCategory: {},
  byQuery: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FetchRecommendationsSuccess:
      return { ...state, recommendations: action.recommendations, };
    case FetchProductsByCategorySuccess:
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          [action.category]: action.products,
        }
      };
    case FetchProductsByQueryRequest:
      return {
        ...state,
        byQuery: {
          ...state.byQuery,
          [action.query]: {
            fetching: true,
            products: []
          }
        }
      };
    case FetchProductsByQuerySuccess:
      return {
        ...state,
        byQuery: {
          ...state.byQuery,
          [action.query]: {
            fetching: false,
            products: action.products,
          }
        }
      };
    default:
      return state;
  }
}
