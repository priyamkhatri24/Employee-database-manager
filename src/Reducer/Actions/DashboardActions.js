import axios from "axios";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const FORM_DATA = "FORM_DATA";
export const DELETE_ICON_CLICK = "DELETE_ICON_CLICK";
export const SORT_CHANGED = "SORT_CHANGED";
export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SAVE = "EDIT_SAVE";
export const SAVE_DATA_TO_DATABASE = "SAVE_DATA_TO_DATABASE";
export const GET_DATA_FROM_DATABASE = "GET_DATA_FROM_DATABASE";
export const GET_DATA_STARTED = "GET_DATA_STARTED";
export const HANDLE_NEW_USER = "HANDLE_NEW_USER";

export const addEmployee = (e) => {
  return {
    type: ADD_EMPLOYEE,
    e: e,
  };
};

export const deleteEmployee = (e) => {
  return {
    type: DELETE_EMPLOYEE,
    e: e,
  };
};

export const formData = (e) => {
  return {
    type: FORM_DATA,
    e: e,
  };
};

export const deleteIconClick = (e) => {
  return {
    type: DELETE_ICON_CLICK,
    e: e,
  };
};

export const sortChanged = (e) => {
  return {
    type: SORT_CHANGED,
    e: e,
  };
};

export const editEmployeeData = (e) => {
  return {
    type: EDIT_DATA,
    e: e,
  };
};

export const saveData = (username) => {
  return (dispatch, getstate) => {
    dispatch({ type: SAVE_DATA_TO_DATABASE });
    const userID = getstate().auth.userID;
    const empData = {
      [userID]: {
        employees: [...getstate().dash.employees],
        userID: userID,
        username: username,
      },
    };
    axios
      .patch(
        "https://employee-database-manager-default-rtdb.firebaseio.com/employees.json",
        empData
      )
      .then((res) => res)
      .catch((err) => alert("Something went wrong. Please try again."));
  };
};

export const getDataStarted = () => {
  return {
    type: GET_DATA_STARTED,
  };
};

export const getDataFromDatabase = (response, userID) => {
  return {
    type: GET_DATA_FROM_DATABASE,
    response: response,
    userID: userID,
  };
};

export const handlerNewUser = () => {
  return {
    type: HANDLE_NEW_USER,
  };
};

export const getData = () => {
  return (dispatch, getstate) => {
    const userID = getstate().auth.userID;
    dispatch(getDataStarted());
    axios
      .get(
        `https://employee-database-manager-default-rtdb.firebaseio.com/employees.json?orderBy="userID"&equalTo="${userID}"`
      )
      .then((response) => {
        dispatch(getDataFromDatabase(response, userID));
      })
      .catch((err) => {
        dispatch(handlerNewUser());
      });
  };
};

export const editSave = (e) => {
  return {
    type: EDIT_SAVE,
    e: e,
  };
};
