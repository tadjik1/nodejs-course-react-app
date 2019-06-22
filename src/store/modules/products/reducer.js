import {
  FetchRecommendationsSuccess,
  FetchProductsByCategorySuccess,
} from './constants';

const initialState = {
  recommendations: [],
  byCategory: {},
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
    default:
      return state;
  }
}
