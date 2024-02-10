import React, { useState } from "react";
// CSS
import "./CourseList.css";
// Data
import { data } from "../../data";
import CourseDetails from "../../components/CourseDetails/CourseDetails";

const CourseList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEnrollment, setSelectedEnrollment] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle enrollment status change
  const handleEnrollmentChange = (e) => {
    setSelectedEnrollment(e.target.value);
  };

  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  // Filter courses based on search query, selected enrollment status, and course duration
  const filteredCourses = data.filter(
    (course) =>
      (course.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedEnrollment === "all" || course.enrollment_status.toLowerCase() === selectedEnrollment.toLowerCase()) &&
      (selectedDuration === "all" || course.course_duration.toLowerCase() === selectedDuration.toLowerCase())
  );

  return (
    <div className="courseList">
      <div className="courseListNav">
        <h1>Courses We Offer:</h1>

        <div className="filters">
          <div className="leftFilter">
            <div className="filterItem">
              <label htmlFor="enrollment">Enrollment Status:</label>
              <select name="enrollment" id="enrollment" value={selectedEnrollment} onChange={handleEnrollmentChange}>
                <option value="all">All</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="filterItem ">
              <label htmlFor="duration">Duration: </label>
              <select name="duration" id="duration" value={selectedDuration} onChange={handleDurationChange}>
                <option value="all">All</option>
                <option value="8 weeks">8 Weeks</option>
                <option value="12 weeks">12 Weeks</option>
              </select>
            </div>
          </div>

          <input type="text" placeholder="Search..." onChange={handleSearchChange} />
        </div>
      </div>

      <div className="allCourses">
        {filteredCourses.map((item) => (
          <CourseDetails course={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
