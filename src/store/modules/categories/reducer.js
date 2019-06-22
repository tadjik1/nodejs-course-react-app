import {
  FetchCategoriesSuccess
} from './constants';

const initialState = [];

export default function reducer(state = initialState, action) {
  if (action.type === FetchCategoriesSuccess) {
    return action.categories;
  }
  return state;
}
