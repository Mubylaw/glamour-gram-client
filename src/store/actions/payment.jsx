import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import { GET_BANKS } from "../actionTypes";

export const getBank = (bank) => ({
  type: GET_BANKS,
  bank,
});

export const getBankFn = () => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/payment/banks`)
      .then(({ data }) => {
        dispatch(getBank(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
