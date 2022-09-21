import { actionConstants } from "./actionConstans";

export const initionalStore = {
  login: { value: null },
};

export const loginReducer = (state = { value: null }, action) => {
  switch (action.state) {
    case actionConstants.LOGINNAME:
      return {
        value: action.payload,
      };

    case actionConstants.LOGOUT:
      return {
        value: null,
      };
    default:
      return state;
  }
};
export const selectUser = (state) => state.login;
