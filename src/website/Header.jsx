import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
      <header className="menu">
        <div className="container border-bottom mb-3 d-none d-md-block">
          <div className="row text-white">
            <div className="col-md-4">
              <ul>
                <li className="d-inline-block mt-3">+(123) 1234-567-8901</li>
                <li className="d-inline-block mt-3 ms-4"> info@domain.com</li>
              </ul>
            </div>
            <div className="col-md-5 ">
              <ul>
                <li className="d-inline-block mt-3">
                  {" "}
                  Mon - Sat 8:00 - 17:30, Sunday - CLOSED
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="mt-3 float-end social-icons">
                <li className="d-inline-block ms-4">
                  <i className="fa fa-facebook"></i>
                </li>
                <li className="d-inline-block ms-4">
                  <i className="fa fa-twitter"></i>
                </li>
                <li className="d-inline-block ms-4">
                  <i className="fa fa-whatsapp"></i>
                </li>
                <li className="d-inline-block ms-4">
                  <i className="fa fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-7 col-md-3">
              <img
                src="https://themewagon.github.io/constructioncompany/assets/img/logo/logo.png"
                alt="logo"
                className="w-100 d-lg-block d-none"
              ></img>
              <img
                src="https://themewagon.github.io/constructioncompany/assets/img/logo/loder-logo.png"
                className=" ms-3 my-2 w-25 d-md-none"
                alt=""
              />
            </div>
            <div className="col-5 col-md-7">
              <Navbar></Navbar>
            </div>
            <div className="col-2">
              <button className="bgcolor btn btn-sm text-white fw-bold p-3 d-none d-md-block">
                {" "}
                CONTACT NOW
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
