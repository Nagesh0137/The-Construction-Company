import React from "react";
import { NavLink } from "react-router-dom";
export default function Header(){
    return(
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
                            <li className="d-inline-block mt-3"> Mon - Sat 8:00 - 17:30, Sunday - CLOSED</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="mt-3 float-end">
                            <li className="d-inline-block ms-4"><i className="fa fa-facebook"></i></li>
                            <li className="d-inline-block ms-4"><i className="fa fa-twitter"></i></li>
                            <li className="d-inline-block ms-4"><i className="fa fa-whatsapp"></i></li>
                            <li className="d-inline-block ms-4"><i className="fa fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className="container">
                <div className="row">
                    <div className="col-7 col-md-3">
                        <img src="https://themewagon.github.io/constructioncompany/assets/img/logo/logo.png" className="w-100 d-lg-block d-none"></img>
                        <img src="https://themewagon.github.io/constructioncompany/assets/img/logo/loder-logo.png" className=" ms-3 my-2 w-25 d-md-none" alt="" />
                    </div>
                    <div className="col-5 col-md-7">
                         <nav className="navbar navbar-expand-lg pb-4">
                            <div className="container-fluid">
                                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa-solid fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarNav">
                                <ul className="navbar-nav d-flex justify-content-center">
                                    <li className="nav-item">
                                    <NavLink className="nav-link ms-md-3" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link ms-md-3" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link ms-md-3" to="/projects">Projects</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link ms-md-3" to="/services" >Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link ms-md-3" to="/blog" >Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link ms-md-3" to="/pages" >Pages</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link ms-md-3" to="/contact" >Contact</NavLink>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-2">
                        <button className="bgcolor btn btn-sm text-white fw-bold p-3 d-none d-md-block"> CONTACT NOW</button>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}