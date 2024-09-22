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
                <i class="float-start bgcolor text-white fs-4 fa-solid fa-magnifying-glass"></i>
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
                <a href="" className="nav-link">
                  Resaurant food(37)
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="">
                  Travel news(10)
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="">
                  Modern technology(03)
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="">
                  MProduct(11)
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="">
                  Inspiration21
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="">
                  Health Care (21)09{" "}
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-down"
            className="mt-4 p-2 text-dark blog-list bg-body-tertiary"
          >
            <h5 className="px-4 pt-3">Recent Post</h5>
            <div className="m-4">
              <div class="overflow-hidden bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_1.png"
                      class="w-75"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="p-2 card-body">
                      <h5 class="card-title">From life was you fish...</h5>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          January 12, 2019
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div class="overflow-hidden bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_2.png"
                      class="w-75"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="p-2 card-body">
                      <h5 class="card-title">The Amazing Hubble</h5>
                      <p class="card-text">
                        <small class="text-body-secondary">02 Hours ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div class="overflow-hidden bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_3.png"
                      class="w-75"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="p-2 card-body">
                      <h5 class="card-title">Astronomy Or Astrology</h5>
                      <p class="card-text">
                        <small class="text-body-secondary">03 Hours ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div class="overflow-hidden bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://themewagon.github.io/constructioncompany/assets/img/post/post_5.png"
                      class="w-75"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="p-2 card-body">
                      <h5 class="card-title">Asteroids telescope</h5>
                      <p class="card-text">
                        <small class="text-body-secondary">01 Hours ago</small>
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
            <div class="newsletter-subscribe container">
              <div class="container">
                <div class="intro">
                  <h2 class="text-center newsletter">
                    Subscribe to our Newsletter
                  </h2>
                </div>
                <form class="form-inline" method="post">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="form-group d-flex justify-content-center">
                    <button class="btn btn-primary mt-2" type="button">
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
