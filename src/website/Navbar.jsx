import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [offConve, setConve] = useState(false);
  console.log(offConve);
  return (
    <>
      <nav className="navbar navbar-expand-lg pb-4">
        <div className="container-fluid">
          <button
            onClick={() => setConve(!offConve)}
            className="navbar-toggler ms-auto"
            type="button"
            aria-label="Toggle navigation"
          >
            {offConve == true ? (
              <i class="fa-solid text-white fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
          <div
            className={`collapse navbar-collapse ${offConve ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link ms-md-3"
                  aria-current="page"
                  onClick={() => setConve(false)}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ms-md-3"
                  onClick={() => setConve(false)}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ms-md-3"
                  onClick={() => setConve(false)}
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ms-md-3"
                  onClick={() => setConve(false)}
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ms-md-3"
                  onClick={() => setConve(false)}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link ms-md-3"
                  onClick={() => setConve(false)}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
