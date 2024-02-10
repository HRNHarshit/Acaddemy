import React, { useContext, useEffect, useState } from "react";
// CSS
import "./Dashboard.css";
// react-router-dom
import { Link } from "react-router-dom";
// context
import { SelectedContext } from "../../context";
// components
import { CourseCard } from "../../components";

const Dashboard = () => {
  // Search state
  const [search, setSearch] = useState("");
  // Filtered State
  const [filteredList, setFilteredList] = useState([]);
  // emptyList state
  const [enrolled, setEnrolled] = useState(false);

  // context
  const { courseList } = useContext(SelectedContext);

  // // update CourseList
  // const courseList = data.filter((item) => selectedCourse.includes(item.id));

  // useEffect
  useEffect(() => {
    const filteredCourse = courseList.filter((course) => {
      const { course_name, instructor_name } = course;
      const searchLowerCase = search.toLowerCase();
      return course_name.toLowerCase().includes(searchLowerCase) || instructor_name.toLowerCase().includes(searchLowerCase);
    });
    if (JSON.stringify(filteredCourse) !== JSON.stringify(filteredList)) {
      setFilteredList(filteredCourse);
    }
  }, [search, courseList]);

  return (
    <div>
      {enrolled ? (
        <div className="emptyDashboard">
          <h3>Explore our courses and start your learning journey today!</h3>
          <Link to="/courseList" className="link">
            Explore Courses
          </Link>
        </div>
      ) : (
        <div className="dashboard">
          <div className="name">
            <span>Hey your Dashboard is here,</span>
            <div className="filter">
              <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>

          {/* Course List which you are enrolled */}
          <div className="courses">
            {filteredList.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
