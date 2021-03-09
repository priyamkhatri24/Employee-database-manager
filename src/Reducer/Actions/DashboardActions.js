export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const FORM_DATA = "FORM_DATA";
export const DELETE_ICON_CLICK = "DELETE_ICON_CLICK";
export const SORT_CHANGED = "SORT_CHANGED";
export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SAVE = "EDIT_SAVE";

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

export const editSave = (e) => {
  return {
    type: EDIT_SAVE,
    e: e,
  };
};
