import React, { createContext, useEffect, useState } from "react";
// Data
import { data } from "../data";

export const SelectedContext = createContext();

const SelectedProvider = ({ children }) => {
  // Course Selected Context
  const [selectedCourse, setSelectedCourse] = useState([3, 6, 10]);
  const [courseList, setCourseList] = useState([]);

  // Add the course
  const courseAdd = (id) => {
    if (!selectedCourse.includes(id)) {
      setSelectedCourse([...selectedCourse, id]);
    }
  };

  // Remove the course
  const courseRemove = (id) => {
    setSelectedCourse((prev) => {
      const newList = prev.filter((item) => +item !== id);
      return newList;
    });
  };

  // Update completion status
  const updateCompletionStatus = (id, status) => {
    setCourseList((prev) => prev.map((course) => (course.id === id ? { ...course, complete: status } : course)));
  };

  useEffect(() => {
    // Update courseList whenever selectedCourse changes
    const updatedCourseList = data
      .filter((item) => selectedCourse.includes(item.id))
      .map((item) => {
        const ran = Math.floor(Math.random() * 100) + 1;
        return { ...item, progress: ran, complete: false };
      });
    setCourseList(updatedCourseList);
  }, [selectedCourse]);

  return <SelectedContext.Provider value={{ courseList, selectedCourse, courseAdd, courseRemove, updateCompletionStatus }}>{children}</SelectedContext.Provider>;
};

export default SelectedProvider;
