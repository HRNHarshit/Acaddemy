import React, { useContext, useState } from "react";
// CSS
import "./CourseCard.css";
// react-icons
import { FaTimes } from "react-icons/fa";
// context
import { SelectedContext } from "../../context";
// react-router-dom
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  // context
  const { courseRemove, updateCompletionStatus } = useContext(SelectedContext);

  // Destructuring
  const { id, image_url, course_name, instructor_name, enrollment_status, due_date } = course;

  // state
  const [progress, setProgress] = useState(course.progress || 0);
  const [completeCourse, setCompleteCourse] = useState(false);

  // handleDelete
  const handleDelete = () => {
    courseRemove(id);
  };

  // handleComplete
  const handleComplete = () => {
    setCompleteCourse(true);
    updateCompletionStatus(id, true);
    setProgress(100);
  };

  return (
    <div className="course" key={id}>
      <div className="overview">
        <Link to={`/detail/${id}`}>
          <img src={image_url} alt={course_name} />
        </Link>
        <div className="course_details">
          <Link to={`/detail/${id}`}>
            <h2>{course_name}</h2>
          </Link>
          <p>
            Instructor: <span> {instructor_name}</span>
          </p>
          <p>
            Enrollment Status: <span>{enrollment_status}</span>
          </p>
        </div>
      </div>

      <div className="progressContainer">
        <div className="progress">
          Progress:
          <div className="progressBar">
            <div className="internalProgress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className="dueDateContainer">
          <div className="dueDateLabel">
            Due Date: <div className="date">{due_date}</div>
          </div>
          <button className="completeButton" onClick={handleComplete}>
            {completeCourse ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      </div>

      <FaTimes className="delete" onClick={handleDelete} />
    </div>
  );
};

export default CourseCard;
