import React, { createContext } from "react";

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  return <CourseContext.Provider value={{}}>{children}</CourseContext.Provider>;
};

export default CourseProvider;
