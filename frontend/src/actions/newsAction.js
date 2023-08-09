// import axios from "axios";

// //get product details
// export const createNews = (news) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "CREATE_NEWS_REQUEST",
//     });
//     const { data } = await axios.post(`/api/v1/create-new`, news);
//     dispatch({
//       type: "CREATE_NEWS_SUCCESS",
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: "CREATE_NEWS_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Clearing errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: "CLEAR_ERRORS" });
// };
