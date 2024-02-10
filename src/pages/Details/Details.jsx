import React from "react";
// CSS
import "./Details.css";
// react-router-dom
import { useParams } from "react-router-dom";
// data
import { data } from "../../data";

const Details = () => {
  const { courseId } = useParams();

  // Find the course object with the matching courseId
  const course = data.find((course) => course.id === parseInt(courseId));

  // Destructuring
  const { course_name, image_url, instructor_name, description, introduction, enrollment_status, course_duration, schedule, location, prerequisites, syllabus, price } = course;

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="details">
      <div className="heading">{course_name}</div>

      <div className="brief">
        <img src={image_url} alt="" />
        <div className="right">
          <p>
            <span>Description: </span>
            {description}
          </p>
          <p>Instructor: {instructor_name}</p>
          <p>Enrollment Status: {enrollment_status}</p>
          <div className="bottom">
            <div className="price">$ {price}</div>
            <button>Enroll Now</button>
          </div>
          <p>Location: {location}</p>
        </div>
      </div>

      <div className="rest">
        <p>Introduction: {introduction}</p>
        <p>Course Duration: {course_duration}</p>
        <p>Schedule: {schedule}</p>
        <p>Pre-requisites: {prerequisites}</p>
        <div>
          <p>Syllabus</p>
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
