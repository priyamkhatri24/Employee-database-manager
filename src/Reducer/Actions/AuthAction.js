import axios from "axios";

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH = "AUTH";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};
export const authSuccess = (response) => {
  return {
    type: AUTH_SUCCESS,
    response: response,
  };
};
export const authFail = (err) => {
  return {
    type: AUTH_FAIL,
    err: err.response,
  };
};

export const auth = (email, password, mode) => {
  return (dispatch) => {
    dispatch(authStart());
    let url;
    if (mode === "login") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOOhkaglztI_6MEkS2cnD2dGRS4OwZwOE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOOhkaglztI_6MEkS2cnD2dGRS4OwZwOE";
    }

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(url, authData)
      .then((response) => {
        dispatch(authSuccess(response));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
