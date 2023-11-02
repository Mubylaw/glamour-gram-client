import {
  ADD_REVIEW,
  GET_REVIEWS,
  GET_REVIEW,
  GET_REVIEW_STAT,
  UPDATE_REVIEW,
  PAGINATE,
  GET_REVIEW_TOTAL,
} from "../actionTypes";

const review = (
  state = {
    new: {},
    all: [],
    total: 0,
    one: {},
    stat: {},
    update: {},
    paginate: {},
  },
  action
) => {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, new: action.review };
    case GET_REVIEW:
      return { ...state, one: action.review };
    case GET_REVIEWS:
      return { ...state, all: action.review };
    case GET_REVIEW_TOTAL:
      return { ...state, total: action.total };
    case GET_REVIEW_STAT:
      return { ...state, stat: action.review };
    case UPDATE_REVIEW:
      return { ...state, update: action.review };
    case PAGINATE:
      return {
        ...state,
        paginate: { step: action.step, details: action.paginate },
      };
    default:
      return state;
  }
};

export default review;
