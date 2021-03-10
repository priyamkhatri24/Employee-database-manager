import * as actionTypes from "./Actions/AuthAction";
const initialState = {
  email: null,
  token: null,
  userID: null,
  error: null,
  loading: false,
  accountCreated: false,
};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};
const authSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    accountCreated: true,
  };
};
const authLogin = (state, action) => {
  return {
    ...state,
    email: action.response.data.email,
    userID: action.response.data.localId,
    token: action.response.data.idToken,
    loading: false,
    accountCreated: false,
    error: null,
  };
};
const authFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.err.data.error.message,
  };
};

const authLogout = () => {
  return initialState;
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGIN:
      return authLogin(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};
export default authReducer;
