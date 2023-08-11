import axios from "axios";

//get product details
export const createNews = (news) => async (dispatch) => {
  try {
    dispatch({
      type: "CREATE_NEWS_REQUEST",
    });
    const { data } = await axios.post(`/api/v1/create-new`, news);
    dispatch({
      type: "CREATE_NEWS_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_NEWS_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const getAllNews = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_NEWS_REQUEST" });
    const { data } = await axios.get(`/api/v1/getall`);
    dispatch({
      type: "GET_NEWS_SUCCESS",
      payload: data.news,
    });
  } catch (error) {
    dispatch({
      type: "GET_NEWS_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const deleteNews = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_REPORT_REQUEST" });
    const { data } = await axios.delete(`/api/v1/delete/news/${id}`);
    dispatch({
      type: "DELETE_REPORT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_REPORT_FAIL",
      payload: error.response.data.message,
    });
  }
};
// Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
