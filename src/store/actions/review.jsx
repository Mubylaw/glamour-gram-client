import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import {
  ADD_REVIEW,
  GET_REVIEWS,
  GET_REVIEW,
  GET_REVIEW_STAT,
  UPDATE_REVIEW,
  PAGINATE,
  GET_REVIEW_TOTAL,
} from "../actionTypes";

export const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

export const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review,
});

export const getReviews = (review) => ({
  type: GET_REVIEWS,
  review,
});

export const getReview = (review) => ({
  type: GET_REVIEW,
  review,
});

export const getReviewStat = (review) => ({
  type: GET_REVIEW_STAT,
  review,
});

export const getReviewTotal = (total) => ({
  type: GET_REVIEW_TOTAL,
  total,
});

export const paginate = (step, paginate) => ({
  type: PAGINATE,
  step,
  paginate,
});

export const addReviewFn = (review, config) => {
  return (dispatch) => {
    return apiCall("post", "/api/v1/reviews", review, config)
      .then(({ data }) => {
        dispatch(addReview(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const updateReviewFn = (review, id, config) => {
  return (dispatch) => {
    return apiCall("put", `/api/v1/reviews/${id}`, review, config)
      .then(({ data }) => {
        dispatch(updateReview(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getReviewsFn = (params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/reviews?${params ? params : ""}`)
      .then(({ data, total, count, pagination }) => {
        dispatch(getReviews(data));
        dispatch(getReviewTotal(total));
        if (count !== 0) {
          dispatch(paginate(Math.ceil(total / count), pagination));
        } else {
          dispatch(paginate(1, pagination));
        }
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getReviewFn = (id, params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/reviews/${id}?${params ? params : ""}`)
      .then(({ data }) => {
        dispatch(getReview(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getReviewStatFn = () => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/reviews/stat`)
      .then(({ data }) => {
        dispatch(getReviewStat(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const uploadReviewFn = (data, config) => {
  return (dispatch) => {
    return apiCall("post", `/api/v1/reviews/many`, data, config)
      .then(({ data }) => {
        dispatch(getReviews(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
