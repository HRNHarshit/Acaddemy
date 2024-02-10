import React, { useContext } from "react";
// CSS
import "./CourseDetails.css";
// context
import { SelectedContext } from "../../context";
// react-router-dom
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { id, course_name, image_url, description, enrollment_status, course_duration, instructor_name, price } = course;

  const { courseAdd, selectedCourse } = useContext(SelectedContext);
  const isEnrollmentClosed = enrollment_status.toLowerCase() === "closed";
  const isEnrolled = selectedCourse.includes(id);

  const handleEnroll = () => {
    courseAdd(id);
  };

  return (
    <div className="courseDetails">
      <Link to={`/courseDetail/${id}`} className="image">
        <img src={image_url} alt={course_name} />
      </Link>
      <div className="courseIntro">
        <Link to={`/courseDetail/${id}`} className="title">
          {course_name}
        </Link>
        <div className="description">{description}</div>
        <div className="enroll_duration">
          <span className="enroll_status">{enrollment_status}</span>
          <span>{course_duration}</span>
        </div>
        <div className="instructor">
          <span>By </span>
          {instructor_name}
        </div>

        <div className="enroll_btn">
          <div className="price">$ {price}</div>
          <button className={`btn ${isEnrollmentClosed || isEnrolled ? "closed" : ""}`} disabled={isEnrollmentClosed || isEnrolled} onClick={handleEnroll}>
            {isEnrolled ? "Enrolled" : isEnrollmentClosed ? "Full" : "Enroll Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
