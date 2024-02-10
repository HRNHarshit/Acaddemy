import React, { useContext, useState } from "react";
// CSS
import "./Details.css";
// react-router-dom
import { useParams } from "react-router-dom";
// Data
import { data } from "../../data";
// context
import { SelectedContext } from "../../context";

const Details = () => {
  const { courseId } = useParams();

  const { selectedCourse, courseAdd } = useContext(SelectedContext);

  // course
  const course = data.find((course) => course.id === parseInt(courseId));

  // Destructuring
  const { course_name, image_url, instructor_name, description, introduction, enrollment_status, course_duration, schedule, location, prerequisites, syllabus, price } = course;

  // State
  const [enrolled, setEnrolled] = useState(selectedCourse.includes(+courseId));
  const isEnrollmentClosed = enrollment_status.toLowerCase() === "closed";

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnroll = () => {
    setEnrolled(true);
    courseAdd(+courseId);
  };

  return (
    <div className="details">
      <div className="heading">{course_name}</div>

      <div className="brief">
        <img src={image_url} alt="" />

        <div className="right">
          <p className="desc">
            <span>Description: </span>
            {description}
          </p>
          <p className="head instName">
            By <span>{instructor_name}</span>
          </p>
          <p className="head enroll">
            <span>Enrollment Status: </span> {enrollment_status}
          </p>
          <p className="head location">
            <span>Location:</span> {location}
          </p>
          <p className="head duration">
            <span>Course Duration:</span> {course_duration}
          </p>
          <div className="pricrbtn">
            <p className="head price">
              Price: <span>${price}</span>
            </p>
            {/* {!enrolled ? (
              <button onClick={handleEnroll} disabled={enrollment_status === "Closed"} className={`${enrollment_status === "Closed" ? "disabled" : ""}`}>
                {enrollment_status === "Closed" ? "Closed" : "Enroll Now"}
              </button>
            ) : (
              <button className="disabled" disabled>
                Enrolled
              </button>
            )} */}
            <button className={`btn ${isEnrollmentClosed || enrolled ? "disabled" : ""}`} disabled={isEnrollmentClosed || enrolled} onClick={handleEnroll}>
              {enrolled ? "Enrolled" : isEnrollmentClosed ? "Full" : "Enroll Now"}
            </button>
          </div>
        </div>
      </div>

      <div className="rest">
        <p className="intro">{introduction}</p>
        <p className="head">
          <span>Schedule:</span> {schedule}
        </p>
        <p className="head">
          <span>Pre-requisites:</span> {prerequisites.join(", ")}
        </p>
        <div className="syllabus">
          <p className="head">
            <span>Syllabus: </span>
          </p>
          <ul>
            {syllabus.map((item, index) => (
              <li key={index}>{item.module_name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
