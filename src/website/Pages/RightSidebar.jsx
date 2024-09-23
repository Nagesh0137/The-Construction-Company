import React from "react";

export default function RightSidebar() {
  return (
    <>
      <div className="conatainer">
        <div className="row">
          <div data-aos="fade-down" className="bg-body-tertiary p-3">
            <input
              type="text"
              className="p-3 w-75 float-start"
              placeholder="Serarch Keyword"
            ></input>
            <div className="float-start p-2 bgcolor rounded-1 ">
              <button className=" border-0 bgcolor p-2 w-100">
                <i className="float-start bgcolor text-white fs-4 fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <br />
            <button type="button" className="btn mt-3 p-3 btn-info w-100">
              Serarch
            </button>
          </div>
          <div
            data-aos="fade-down"
            className="mt-4 p-2 text-dark blog-list bg-body-tertiary"
          >
            <h5 className="px-4 pt-3">Category</h5>
            <ul type="none" className="">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Resaurant food(37)
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="">
                  Travel news(10)
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="">
                  Modern technology(03)
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="">
                  MProduct(11)
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="">
                  Inspiration21
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="">
                  Health Care (21)09{" "}
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-down"
            className="mt-4 p-2 text-dark blog-list bg-body-tertiary "
          >
            <h5 className="px-4 pt-3">Recent Post</h5>
            <div className="m-4">
              <div className="overflow-hidden bg-body-tertiary border-0">
                <div className="row g-0">
                  <div className="col-md-4 recent_post">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_1.png"
                      className="w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="p-2 card-body">
                      <h5 className="card-title">From life was you fish...</h5>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          January 12, 2019
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div className="overflow-hidden bg-body-tertiary border-0">
                <div className="row g-0">
                  <div className="col-md-4 recent_post">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_2.png"
                      className="w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="p-2 card-body">
                      <h5 className="card-title">The Amazing Hubble</h5>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          02 Hours ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div className="overflow-hidden bg-body-tertiary border-0">
                <div className="row g-0">
                  <div className="col-md-4 recent_post">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_3.png"
                      className="w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="p-2 card-body">
                      <h5 className="card-title">Astronomy Or Astrology</h5>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          03 Hours ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div className="overflow-hidden bg-body-tertiary border-0">
                <div className="row g-0">
                  <div className="col-md-4 recent_post">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_5.png"
                      className="w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="p-2 card-body">
                      <h5 className="card-title">Asteroids telescope</h5>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          01 Hours ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="mt-2 p-2 text-dark blog-list bg-body-tertiary"
          >
            <div className="newsletter-subscribe container">
              <div className="container">
                <div className="intro">
                  <h2 className="text-center newsletter">
                    Subscribe to our Newsletter
                  </h2>
                </div>
                <form className="form-inline" method="post">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group d-flex justify-content-center">
                    <button className="btn btn-primary mt-2" type="button">
                      Subscribe{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
