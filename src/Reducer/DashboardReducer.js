import * as actionTypes from "./Actions/DashboardActions";
const initialState = {
  employees: [
    {
      name: "Priyam Khatri",
      birth: "24-08-1998",
      bloodGroup: "A+",
      department: "Reseach",
      designation: "Engineer",
      contact: "9810345998",
      email: "priyamkhatri24@gmail.com",
      address: "Sector 55 Noida",
      id: 0,
    },
    {
      name: "Aaurav Sharma",
      birth: "12-45-8885",
      bloodGroup: "B+",
      department: "Sales",
      designation: "Salesman",
      contact: "789456123",
      email: "Gaurav@testmail.cpm",
      id: 1,
      address: "Haldwani",
    },
    {
      name: "Dheeraj Gupta",
      birth: "12-45-7878",
      bloodGroup: "AB+",
      department: "Reseach and Dev",
      designation: "Engineer",
      contact: "78465123",
      email: "Dheeraj@fmail.com",
      id: 2,
      address: "Faridabad",
    },
  ],
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
      return {};
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
    default:
      return state;
  }
};

export default dashboardReducer;
