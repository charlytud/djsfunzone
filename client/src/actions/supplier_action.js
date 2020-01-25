import {
    GET_SUPPLIERS,
    GET_SUPPLIER_BY_ID,
    SUPPLIER_LOADING,
    GET_ERRORS,
    DELETE_SUPPLIER
  } from "./types";
  import {
    URL_ADMIN_SUPPLIER,
    URL_GET_SUPPLIERS,
    URL_GET_SUPPLIER_BY_ID,
  } from "../utils/api-url";
  import Http from "../utils/http";
  
  export const getSuppliers = () => async dispatch => {
    try {
      dispatch({ type: SUPPLIER_LOADING, payload: true });
      const suppliers = await Http.get(URL_GET_SUPPLIERS);
      dispatch({ type: GET_SUPPLIERS, payload: suppliers });
    } catch (error) {
      // const err = JSON.parse(error.message);
      // dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const getSupplierById = id => async dispatch => {
    try {
      dispatch({ type: SUPPLIER_LOADING, payload: true });
      const supplier = await Http.get(`${URL_GET_SUPPLIER_BY_ID}/${id}`);
      dispatch({ type: GET_SUPPLIER_BY_ID, payload: supplier });
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  export const getSupplierByIdToEdit = id => async dispatch => {
    try {
      dispatch({ type: SUPPLIER_LOADING, payload: true });
      const supplier = await Http.get(`${URL_ADMIN_SUPPLIER}/${id}`);
      dispatch({ type: GET_SUPPLIER_BY_ID, payload: supplier });
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const addSupplier = supplierData => async dispatch => {
    try {
      dispatch({ type: SUPPLIER_LOADING, payload: true });
      const supplier = await Http.post(URL_ADMIN_SUPPLIER, supplierData);
      dispatch({ type: GET_SUPPLIER_BY_ID, payload: supplier });
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const editSupplier = (supplierData, history) => async dispatch => {
    try {
      dispatch({ type: SUPPLIER_LOADING, payload: true });
      const supplier = await Http.post(URL_ADMIN_SUPPLIER, supplierData);
      dispatch({ type: GET_SUPPLIER_BY_ID, payload: supplier });
      history.push("/dashboard");
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  };
  
  export const deleteSupplier = id => async dispatch => {
    try {
      dispatch({ type: SUPPLIER_LOADING, payload: true });
      const supplier = await Http.delete(`${URL_ADMIN_SUPPLIER}/${id}`);
      if (supplier.success) {
        dispatch({ type: DELETE_SUPPLIER, payload: id })
      }
    } catch (error) {
      const err = JSON.parse(error.message);
      dispatch({ type: GET_ERRORS, payload: err });
    }
  }
  