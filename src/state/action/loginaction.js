import { actionConstants } from "../reducers/actionConstans";

export function login(user) {
  return {
    type: actionConstants.LOGIN,
    payload: user,
  };
}
export function logout() {
  return {
    type: actionConstants.LOGOUT,
  };
}
