import * as actionTypes from "./Actions/DashboardActions";
const initialState = {
  employees: [],
  employeeData: {
    name: "",
    birth: "",
    bloodGroup: "",
    department: "",
    designation: "",
    contact: "",
    email: "",
    address: "",
  },
  deleting: null,
  editing: null,
  gettingData: false,
  dataSaved: false,
  saving: false,
  sortby: "default",
};

const addEmployee = (state, action) => {
  action.e.preventDefault();
  const employeeArray = [...state.employees];
  employeeArray.push(state.employeeData);
  return {
    ...state,
    employees: employeeArray,
    employeeData: initialState.employeeData,
  };
};

const deleteEmployee = (state) => {
  const newEmployeeArray = state.employees.filter(
    (_, i) => i + 1 !== +state.deleting
  );
  return {
    ...state,
    employees: newEmployeeArray,
  };
};

const formData = (state, action) => {
  const employeeData = { ...state.employeeData };
  employeeData[action.e.target.name] = action.e.target.value;
  employeeData.id = new Date();
  return {
    ...state,
    employeeData: employeeData,
  };
};

const deleteIconClick = (state, action) => {
  const clicked = action.e.target.getAttribute("ele");
  return {
    ...state,
    deleting: clicked,
  };
};

const sort = (state, action) => {
  const sortParameter = action.e.target.value;
  const employeeArray = [...state.employees];
  const sortedArray = employeeArray.sort(function (a, b) {
    if (sortParameter === "default") {
      return 0;
    }
    if (a[sortParameter] < b[sortParameter]) {
      return -1;
    }
    if (a[sortParameter] > b[sortParameter]) {
      return 1;
    }
    return 0;
  });
  return { ...state, employees: sortedArray };
};

const saveDataToDatabase = (state) => {
  return {
    ...state,
    saving: true,
  };
};

const getDataStarted = (state) => {
  return {
    ...state,
    gettingData: true,
  };
};

const getDataFromDatabase = (state, action) => {
  const employees = action.response.data[action.userID].employees;

  return {
    ...state,
    employees: employees,
    gettingData: false,
  };
};

const handleNewUser = (state, action) => {
  return {
    ...state,
    gettingData: false,
    employees: [],
  };
};

const resetEmployees = (state, action) => {
  return initialState;
};

const dataSaved = (state) => {
  return {
    ...state,
    dataSaved: true,
    saving: true,
  };
};

const closeDataSaveModal = (state) => {
  return {
    ...state,
    dataSaved: false,
    saving: false,
  };
};

// const editData = (state, action) => {
//   const index = action.e.target.getAttribute("ele") - 1;
//   const employee = { ...state.employees[index] };
//   return {
//     ...state,
//     employeeData: employee,
//     editing: index,
//   };
// };

// const editSave = (state, action) => {
//   action.e.preventDefault();
//   const employees = [...state.employees];
//   employees[state.editing] = { ...state.employeeData };
//   return {
//     ...state,
//     employees: employees,
//     employeeData: initialState.employeeData,
//   };
// };

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return addEmployee(state, action);
    case actionTypes.DELETE_EMPLOYEE:
      return deleteEmployee(state);
    case actionTypes.FORM_DATA:
      return formData(state, action);
    case actionTypes.DELETE_ICON_CLICK:
      return deleteIconClick(state, action);
    case actionTypes.SORT_CHANGED:
      return sort(state, action);
    case actionTypes.EDIT_DATA:
      return state;
    case actionTypes.EDIT_SAVE:
      return state;
    case actionTypes.SAVE_DATA_TO_DATABASE:
      return saveDataToDatabase(state);
    case actionTypes.GET_DATA_STARTED:
      return getDataStarted(state);
    case actionTypes.GET_DATA_FROM_DATABASE:
      return getDataFromDatabase(state, action);
    case actionTypes.HANDLE_NEW_USER:
      return handleNewUser(state, action);
    case actionTypes.RESET_EMPLOYEES:
      return resetEmployees(state, action);
    case actionTypes.DATA_SAVED:
      return dataSaved(state);
    case actionTypes.CLOSE_DATASAVED_MODAL:
      return closeDataSaveModal(state);
    default:
      return state;
  }
};

export default dashboardReducer;
