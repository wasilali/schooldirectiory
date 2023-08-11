import {
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAIL,
  GET_REPORT_FAIL,
  GET_REPORT_REQUEST,
  GET_REPORT_SUCCESS,
  DELETE_REPORT_FAIL,
  DELETE_REPORT_REQUEST,
  DELETE_REPORT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/reportConstant";

import axios from "axios";

export const createReport = (report) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_REPORT_REQUEST });
    const { data } = await axios.post(`/api/v1/createlink`, report);
    dispatch({
      type: CREATE_REPORT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REPORT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllReport = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REPORT_REQUEST });
    const { data } = await axios.get(`/api/v1/getlinks`);
    console.log(data.allLinks);
    dispatch({
      type: GET_REPORT_SUCCESS,
      payload: data.allLinks,
    });
  } catch (error) {
    dispatch({
      type: GET_REPORT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteReport = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REPORT_REQUEST });
    const { data } = await axios.delete(`/api/v1/deletelink/${id}`);
    dispatch({
      type: DELETE_REPORT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REPORT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
