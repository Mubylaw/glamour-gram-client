import { GET_BANKS } from "../actionTypes";

const charity = (
  state = {
    banks: [],
  },
  action
) => {
  switch (action.type) {
    case GET_BANKS:
      return { ...state, banks: action.bank };
    default:
      return state;
  }
};

export default charity;
