import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import { CREATE_CHAT, GET_ANSWER } from "../actionTypes";

export const createChat = (chat) => ({
  type: CREATE_CHAT,
  chat,
});

export const getAnswer = (chat) => ({
  type: GET_ANSWER,
  chat,
});

export const createChatFn = (chat) => {
  return (dispatch) => {
    return apiCall("post", "/api/v1/chat/store", chat)
      .then(({ success }) => {
        dispatch(createChat(success));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const askQuestion = (data) => {
  return (dispatch) => {
    return apiCall("post", `/api/v1/chat`, data)
      .then(({ data }) => {
        dispatch(getAnswer(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
