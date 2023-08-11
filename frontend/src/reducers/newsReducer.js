export const newsReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "GET_NEWS_REQUEST":
      return {
        loading: true,
      };
    case "GET_NEWS_SUCCESS":
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    case "GET_NEWS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_NEWS_RESET":
      return {
        ...state,
        loading: false,
        message: null,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const newsCreateReducer = (state = { news: {} }, action) => {
  switch (action.type) {
    case "CREATE_NEWS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "CREATE_NEWS_SUCCESS":
      return {
        loading: false,
        success: action.payload,
      };
    case "CREATE_NEWS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "NEW_PRODUCT_RESET":
      return {
        ...state,
        loading: false,
        success: false,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const deleteNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_REPORT_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_REPORT_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case "DELETE_REPORT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_REPORT_RESET":
      return {
        ...state,
        loading: false,
        message: null,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
