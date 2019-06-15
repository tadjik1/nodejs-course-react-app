import {
  FetchCategoriesRequest, FetchCategoriesSuccess, FetchCategoriesFailure
} from './constants';
import client from "../../../network";

export function fetchCategories() {
  return (dispatch, getState) => {
    dispatch({type: FetchCategoriesRequest});
    
    client.get('/api/categories')
      .then(response => {
        dispatch({type: FetchCategoriesSuccess, categories: response.data.categories});
      }).catch(error => {
        dispatch({type: FetchCategoriesFailure, error: error.response.data.error});
      });
  }
}
