import React from "react";

let UserContext = null;
let studentContext = null;
const CollegeDetails = (value) => {
  UserContext = React.createContext(value);
};
const studentDetails = (value) => {
  studentContext = React.createContext(value);
};
export { UserContext, studentContext, CollegeDetails, studentDetails };
