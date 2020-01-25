import {
    GET_CATEGORIES,
    GET_CATEGORY_BY_ID,
    CATEGORY_LOADING,
    GET_ERRORS,
    DELETE_CATEGORY
  } from "./types";
  import {
    URL_ADMIN_CATEGORY,
    URL_GET_CATEGORIES,
    URL_GET_CATEGORY_BY_ID,
  } from "../utils/api-url";
  import Http from "../utils/http";
  
  export const getCategories = () => async dispatch => {
    try {
      dispatch({ type: CATEGORY_LOADING, payload: true });
      const categories = await Http.get(URL_GET_CATEGORIES);
      dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      // const err = JSON.parse(error.message);
      // dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const getCategoryById = id => async dispatch => {
    try {
      dispatch({ type: CATEGORY_LOADING, payload: true });
      const category = await Http.get(`${URL_GET_CATEGORY_BY_ID}/${id}`);
      dispatch({ type: GET_CATEGORY_BY_ID, payload: category });
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  export const getCategoryByIdToEdit = id => async dispatch => {
    try {
      dispatch({ type: CATEGORY_LOADING, payload: true });
      const category = await Http.get(`${URL_ADMIN_CATEGORY}/${id}`);
      dispatch({ type: GET_CATEGORY_BY_ID, payload: category });
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const addCategory = categoryData => async dispatch => {
    try {
      dispatch({ type: CATEGORY_LOADING, payload: true });
      const category = await Http.post(URL_ADMIN_CATEGORY, categoryData);
      dispatch({ type: GET_CATEGORY_BY_ID, payload: category });
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const editCategory = (categoryData, history) => async dispatch => {
    try {
      dispatch({ type: CATEGORY_LOADING, payload: true });
      const category = await Http.post(URL_ADMIN_CATEGORY, categoryData);
      dispatch({ type: GET_CATEGORY_BY_ID, payload: category });
      history.push("/dashboard");
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const deleteCategory = id => async dispatch => {
    try {
      dispatch({ type: CATEGORY_LOADING, payload: true });
      const category = await Http.delete(`${URL_ADMIN_CATEGORY}/${id}`);
      if (category.success) {
        dispatch({ type: DELETE_CATEGORY, payload: id })
      }
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  }
  