import React from "react";
import Headimg from "./Headimg";
export default function Project() {
  return (
    <>
      <Headimg title="OUR PROJECTS"></Headimg>
      <section>
        <div className="container pb-5 mb-5">
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            className="row Project p-5 mt-5"
          >
            <div className="col-12 col-md-6">
              <div className="">
                <h1 className="">OUR PROJECTS</h1>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="project-nav">
                <ul className="d-flex justify-content-center pt-5 ps-md-5">
                  <li className="nav-item">
                    <a className="active">show all</a>
                  </li>
                  <li className="nav-item">
                    <a className="">Intorior</a>
                  </li>
                  <li className="nav-item">
                    <a className="">Recent</a>
                  </li>
                  <li className="nav-item">
                    <a className="">Big building</a>
                  </li>
                  <li className="nav-item">
                    <a className="">Park</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* project 1nd row */}
          <div className="row" data-aos="fade-up">
            <div data-aos="fade-up" className="col-12 col-md-4">
              <div class="mt-5 project-card border-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/gallery/project1.png"
                  class="card-img-top h-100 w-100"
                  alt="..."
                />
                <div class="card-title bg-body-tertiary p-3">
                  <div className="w-100 h-100 d-flex justify-content-end">
                    <a href="" className="nav-link">
                      <i className="fa-solid fa-plus project-nav-plus"></i>
                    </a>
                  </div>
                  <h2> Floride Chemicals Factory</h2>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="col-12 col-md-4">
              <div class="mt-5 project-card border-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/gallery/project2.png"
                  class="card-img-top h-100 w-100"
                  alt="..."
                />
                <div class="card-title bg-body-tertiary p-3">
                  <div className="w-100 h-100 d-flex justify-content-end">
                    <a href="" className="nav-link">
                      <i className="fa-solid fa-plus project-nav-plus"></i>
                    </a>
                  </div>
                  <h2> Floride Chemicals Factory</h2>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="col-12 col-md-4">
              <div class="mt-5 project-card border-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/gallery/project3.png"
                  class="card-img-top h-100 w-100"
                  alt="..."
                />
                <div class="card-title bg-body-tertiary p-3">
                  <div className="w-100 h-100 d-flex justify-content-end">
                    <a href="" className="nav-link">
                      <i className="fa-solid fa-plus project-nav-plus"></i>
                    </a>
                  </div>
                  <h2> Floride Chemicals Factory</h2>
                </div>
              </div>
            </div>

            {/* project 2nd row */}
            <div data-aos="fade-up" className="col-12 col-md-4">
              <div class="mt-5 project-card border-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/gallery/project4.png"
                  class="card-img-top h-100 w-100"
                  alt="..."
                />
                <div class="card-title bg-body-tertiary p-3">
                  <div className="w-100 h-100 d-flex justify-content-end">
                    <a href="" className="nav-link">
                      <i className="fa-solid fa-plus project-nav-plus"></i>
                    </a>
                  </div>
                  <h2> Floride Chemicals Factory</h2>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="col-12 col-md-4">
              <div class="mt-5 project-card border-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/gallery/project5.png"
                  class="card-img-top h-100 w-100"
                  alt="..."
                />
                <div class="card-title bg-body-tertiary p-3">
                  <div className="w-100 h-100 d-flex justify-content-end">
                    <a href="" className="nav-link">
                      <i className="fa-solid fa-plus project-nav-plus"></i>
                    </a>
                  </div>
                  <h2> Floride Chemicals Factory</h2>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="col-12 col-md-4">
              <div class="mt-5 project-card border-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/gallery/project6.png"
                  class="card-img-top h-100 w-100"
                  alt="..."
                />
                <div class="card-title bg-body-tertiary p-3">
                  <div className="w-100 h-100 d-flex justify-content-end">
                    <a href="" className="nav-link">
                      <i className="fa-solid fa-plus project-nav-plus"></i>
                    </a>
                  </div>
                  <h2> Floride Chemicals Factory</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
