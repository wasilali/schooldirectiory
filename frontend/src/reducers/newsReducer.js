// // export const productsReducer = (state = { products: [] }, action) => {
// //   switch (action.type) {
// //     case ALL_PRODUCT_REQUEST:
// //     case ADMIN_PRODUCT_REQUEST:
// //       return {
// //         loading: true,
// //         products: [],
// //       };
// //     case ALL_PRODUCT_SUCCESS:
// //       return {
// //         loading: false,
// //         products: action.payload.products,
// //         productsCount: action.payload.productsCount,
// //         resultPerPage: action.payload.resultPerPage,
// //         filteredProductsCount: action.payload.filteredProductsCount,
// //       };

// //     case ADMIN_PRODUCT_SUCCESS:
// //       return {
// //         loading: false,
// //         products: action.payload,
// //       };
// //     case ALL_PRODUCT_FAIL:
// //     case ADMIN_PRODUCT_FAIL:
// //       return {
// //         loading: false,
// //         error: action.payload,
// //       };
// //     case CLEAR_ERRORS:
// //       return {
// //         ...state,
// //         error: null,
// //       };
// //     default:
// //       return state;
// //   }
// // };

// export const newsCreateReducer = (state = { news: {} }, action) => {
//   switch (action.type) {
//     case "CREATE_NEWS_REQUEST":
//       return {
//         loading: true,
//         ...state,
//       };
//     case "CREATE_NEWS_SUCCESS":
//       return {
//         loading: false,
//         success: action.payload,
//       };
//     case "CREATE_NEWS_FAIL":
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case "CLEAR_ERRORS":
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };
