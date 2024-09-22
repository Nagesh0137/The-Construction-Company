import React from "react";
import Headimg from "./Headimg";
import RightSidebar from "./RightSidebar";
export default function Blog() {
  return (
    <>
      <Headimg title="BLOG"></Headimg>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="conatainer">
                <div className="row">
                  <div className="col-12">
                    <div
                      data-aos="fade-right"
                      className="card border-0 mb-3 overflow-hidden"
                    >
                      <img
                        src="https://themewagon.github.io/constructioncompany/assets/img/blog/single_blog_1.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body pb-4 bg-body-tertiary position-relative shadow-lg z-1">
                        <div className="blog-date bgcolor p-4 rounded-2 ms-3 text-white fs-bold fs-5">
                          15
                          <br /> Jan
                        </div>
                        <h5 className="mt-5 card-title">
                          Google inks pact for new 35-storey office
                        </h5>
                        <p className="card-text">
                          That dominion stars lights dominion divide years for
                          fourth have don't stars is that he earth it first
                          without heaven in place seed it second morning saying.
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <i className="fa fa-user mx-2"></i>Travel, Lifestyle
                            | <i className="fa-solid fa-comments mx-2"></i>03
                            Comments
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      data-aos="fade-right"
                      className="card border-0 mb-3 overflow-hidden"
                    >
                      <img
                        src="https://themewagon.github.io/constructioncompany/assets/img/blog/single_blog_2.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body pb-4 bg-body-tertiary position-relative shadow-lg z-1">
                        <div className="blog-date bgcolor p-4 rounded-2 ms-3 text-white fs-bold fs-5">
                          15
                          <br /> Jan
                        </div>
                        <h5 className="mt-5 card-title">
                          Google inks pact for new 35-storey office
                        </h5>
                        <p className="card-text">
                          That dominion stars lights dominion divide years for
                          fourth have don't stars is that he earth it first
                          without heaven in place seed it second morning saying.
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <i className="fa fa-user mx-2"></i>Travel, Lifestyle
                            | <i className="fa-solid fa-comments mx-2"></i>03
                            Comments
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      data-aos="fade-right"
                      className="card border-0 mb-3 overflow-hidden"
                    >
                      <img
                        src="https://themewagon.github.io/constructioncompany/assets/img/blog/single_blog_3.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body pb-4 bg-body-tertiary position-relative shadow-lg z-1">
                        <div className="blog-date bgcolor p-4 rounded-2 ms-3 text-white fs-bold fs-5">
                          15
                          <br /> Jan
                        </div>
                        <h5 className="mt-5 card-title">
                          Google inks pact for new 35-storey office
                        </h5>
                        <p className="card-text">
                          That dominion stars lights dominion divide years for
                          fourth have don't stars is that he earth it first
                          without heaven in place seed it second morning saying.
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <i className="fa fa-user mx-2"></i>Travel, Lifestyle
                            | <i className="fa-solid fa-comments mx-2"></i>03
                            Comments
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <RightSidebar></RightSidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
