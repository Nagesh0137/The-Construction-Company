import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="container mt-5 pt-5">
          <div className="row text-white">
            <div className="col-12 col-md-4">
              <div className="p-3">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/logo/logo2_footer.png"
                  className=""
                  alt=""
                />
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-2">
              <div>
                <h2 className="fs-bold">Quick Links</h2>
                <ul type="none" className="pt-4">
                  <li className="nav-item mt-2">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item mt-2">
                    <NavLink to="/services" className="nav-link">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item mt-2">
                    <NavLink to="/projects" className="nav-link">
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item mt-2">
                    <NavLink to="/contact" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div>
                <h2 className="fs-bold">Contact</h2>
                <ul type="none" className="pt-4">
                  <li className="nav-item mt-2">
                    <a href="#" className="nav-link">
                      198 West 21th Street, Suite 721 New York,NY 10010
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a href="#" className="nav-link">
                      Phone: +95 (0) 123 456 789
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a href="#" className="nav-link">
                      Cell: +95 (0) 123 456 789
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="px-md-5 text-white">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="border-0 p-2"
                  />
                  <button className="btn p-2 px-2">SIGN UP</button>
                  <img
                    src="https://themewagon.github.io/constructioncompany/assets/img/gallery/map-footer.png"
                    className="w-100 bg-dark mt-5"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* copywriter */}
            <div className="col-12">
              <p className="py-5">
                Copyright ©2024 All rights reserved by Nagesh Sonawane
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
