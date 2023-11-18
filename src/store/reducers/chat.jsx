import { CREATE_CHAT, GET_ANSWER } from "../actionTypes";

const booking = (
  state = {
    exist: false,
    answer: {},
  },
  action
) => {
  switch (action.type) {
    case CREATE_CHAT:
      return { ...state, exist: action.chat };
    case GET_ANSWER:
      return { ...state, answer: action.chat };
    default:
      return state;
  }
};

export default booking;
