import React, { useEffect, useState } from "react";
// CSS
import "./Navbar.css";
// react-router-dom
import { Link } from "react-router-dom";
import { Logo } from "../../asstes";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>Academy</span>
        </div>
        <div className="itemList">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/courseList" className="item">
            Courses
          </Link>
          <Link to="/contact" className="item">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
