import React from "react";
import Headimg from "./Headimg";
export default function Services() {
  return (
    <>
      <Headimg title="SERVICES"></Headimg>
      <section>
        <div className="container mt-5">
          <div className="row our-services">
            <div className="col-12">
              <h1>OUR SERVICES</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div data-aos="zoom-in-down" className="col-12 col-md-4">
              <div className="card overflow-hidden border-0 rounded-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/service/servicess1.png"
                  className="card-img-top rounded-0"
                  alt="..."
                />
                <div className="card-body z-1">
                  <h5 className="card-title">
                    Engineering techniques & implementation
                  </h5>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mt-3">Read More</p>
                    <a href="#" className="btn">
                      <i className="fa-solid fa-plus p-2 mb-0"></i>
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="https://themewagon.github.io/constructioncompany/assets/img/icon/services_icon1.png"
                className="w-100"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-down" className="col-12 col-md-4">
              <div className="card overflow-hidden border-0 rounded-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/service/servicess2.png"
                  className="card-img-top rounded-0"
                  alt="..."
                />
                <div className="card-body z-1">
                  <h5 className="card-title">
                    Engineering techniques & implementation
                  </h5>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mt-3">Read More</p>
                    <a href="#" className="btn">
                      <i className="fa-solid fa-plus p-2 mb-0"></i>
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="https://themewagon.github.io/constructioncompany/assets/img/icon/services_icon1.png"
                className="w-100"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-down" className="col-12 col-md-4">
              <div className="card overflow-hidden border-0 rounded-0">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/service/servicess3.png"
                  className="card-img-top rounded-0"
                  alt="..."
                />
                <div className="card-body z-1">
                  <h5 className="card-title">
                    Engineering techniques & implementation
                  </h5>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mt-3">Read More</p>
                    <a href="#" className="btn">
                      <i className="fa-solid fa-plus p-2 mb-0"></i>
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="https://themewagon.github.io/constructioncompany/assets/img/icon/services_icon1.png"
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
