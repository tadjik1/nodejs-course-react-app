import {
  FetchCategoriesRequest, FetchCategoriesSuccess, FetchCategoriesFailure
} from './constants';

const initialState = {
  fetching: false,
  error: null,
  list: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FetchCategoriesRequest:
      return { ...initialState, fetching: true, };
    case FetchCategoriesSuccess:
      return { ...state, fetching: false, list: action.categories, };
    case FetchCategoriesFailure:
      return { ...state, fetching: false, error: action.error, };
    default:
      return state;
  }
}
