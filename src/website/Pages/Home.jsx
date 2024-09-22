import React from "react";
export default function Home() {
  const data = [
    {
      first_heading: "HAND CAR WASH AND DETAILING SERVICE",
      main_heading: "ADVANCED",
      main_animated_heading: "CONSTRUCTION",
    },
  ];

  const ourservice = [
    {
      our_service_image:
        "https://themewagon.github.io/constructioncompany/assets/img/service/servicess1.png",
      our_service_heading: "Engineering techniques & implementation",
    },
    {
      our_service_image:
        "https://themewagon.github.io/constructioncompany/assets/img/service/servicess2.png",
      our_service_heading: "Engineering techniques & implementation",
    },
    {
      our_service_image:
        "https://themewagon.github.io/constructioncompany/assets/img/service/servicess3.png",
      our_service_heading: "Engineering techniques & implementation",
    },
  ];
  const ourproject = [
    {
      Project_image:
        "https://themewagon.github.io/constructioncompany/assets/img/gallery/project1.png",
      project_heading: "Floride Chemicals Factory",
    },
    {
      Project_image:
        "https://themewagon.github.io/constructioncompany/assets/img/gallery/project2.png",
      project_heading: "Floride Chemicals Factory",
    },
    {
      Project_image:
        "https://themewagon.github.io/constructioncompany/assets/img/gallery/project3.png",
      project_heading: "Floride Chemicals Factory",
    },
    {
      Project_image:
        "https://themewagon.github.io/constructioncompany/assets/img/gallery/project4.png",
      project_heading: "Floride Chemicals Factory",
    },
    {
      Project_image:
        "https://themewagon.github.io/constructioncompany/assets/img/gallery/project5.png",
      project_heading: "Floride Chemicals Factory",
    },
    {
      Project_image:
        "https://themewagon.github.io/constructioncompany/assets/img/gallery/project6.png",
      project_heading: "Floride Chemicals Factory",
    },
  ];

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0 overflow-hidden">
              <div className="backimg d-flex align-items-center">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="home-text w-100"
                >
                  <span className="text-white position-absolute fw-bold z-3 ps-5 text-uppercase">
                    {data && data[0].first_heading}
                  </span>
                  <p>{data && data[0].main_heading}</p>
                  <div className="">
                    <h2>{data && data[0].main_animated_heading}</h2>
                    <h2>{data && data[0].main_animated_heading}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About us */}
      <section>
        <div className="container mt-5">
          <div className="row our-services">
            <div className="col-12">
              <h1>OUR SERVICES</h1>
            </div>
          </div>
          <div className="row mt-5">
            {ourservice &&
              ourservice.map((val, index) => (
                <div
                  key={index}
                  data-aos="zoom-out-up"
                  className="col-12 col-md-4"
                >
                  <div className="card overflow-hidden border-0 rounded-0">
                    <img
                      src={val.our_service_image}
                      className="card-img-top rounded-0"
                      alt="Service"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{val.our_service_heading}</h5>
                      <div className="d-flex align-items-center mt-4">
                        <p className="mt-3">Read More</p>
                        <a href={val.our_service_link} className="btn">
                          <i className="fa-solid fa-plus p-2 mb-0"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://themewagon.github.io/constructioncompany/assets/img/icon/services_icon1.png"
                    className="w-100"
                    alt="Service Icon"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* about us who i am */}
      <section className="">
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div data-aos="fade-up" className="co-12 col-md-6">
              <div className="About-us p-4">
                <h1>WHO WE ARE</h1>
                <b>
                  Mollit anim laborum duis au dolor in voluptcate velit ess
                  cillum dolore eu lore dsu quality mollit anim laborumuis au
                  dolor in voluptate velit cillu.
                </b>{" "}
                <br />
                <br />
                <p>
                  Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re
                  voluptate velit esscillumlore eu quife nrulla parihatur.
                  Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                  dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore
                  mofllit anim.
                </p>
                <br />
                <br />
                <button
                  type="button"
                  className="btn py-3 px-5 bgcolor text-white"
                >
                  READ MORE
                </button>
              </div>
            </div>
            <div data-aos="fade-up" className="co-12 col-md-6">
              <div className="position-relative">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/gallery/safe_in.png"
                  className="w-100 float-start"
                  alt=""
                />
                <div className="Since-card ">
                  <h1>1994</h1>
                  <p>Since</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR PROJECT  */}
      <section>
        <div className="container pb-5 mb-5">
          <div className="row Project p-5 mt-5">
            <div className="col-12 col-md-6">
              <div className="">
                <h1 className="">OUR PROJECTS</h1>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="project-nav">
                <ul className="d-flex justify-content-center pt-5 ps-md-5">
                  <li className="nav-item">
                    <a href="#" className="active">
                      show all
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="">
                      Intorior
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="">
                      Recent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="">
                      Big building
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="">
                      Park
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* project 1nd row */}
          <div className="row">
            {ourproject &&
              ourproject.map((val, index) => (
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="col-12 col-md-4"
                  key={index}
                >
                  <div className="mt-5 project-card border-0">
                    <img
                      src={val.Project_image}
                      className="card-img-top h-100 w-100"
                      alt="..."
                    />
                    <div className="card-title bg-body-tertiary p-3">
                      <div className="w-100 h-100 d-flex justify-content-end">
                        <a href="" className="nav-link">
                          <i className="fa-solid fa-plus project-nav-plus"></i>
                        </a>
                      </div>
                      <h2>{val.project_heading}</h2>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* lets talk */}
      <section>
        <div className="container-fluid m-0 p-0 overflow-hidden">
          <div className="row">
            <div className="col-md-12">
              <div className="lets-talk-bgimg py-5 text-white">
                <div className="container">
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1500"
                  >
                    <h2>Lats talk with us</h2>
                  </div>
                  <span className="back-text">Lat`s chat</span>
                  <p className="mt-4">
                    Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re
                    voluptate velit esscillumlore eu quife nrulla parihatur.
                    Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                    dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore
                    mofllit anim.
                  </p>
                  <a href="">
                    {" "}
                    <button className="btn py-2 px-4 mt-5 bg-white">
                      {" "}
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="container count-bg-img">
                <div className="row">
                  <div className="col-md-4">
                    <div className="d-flex p-4 count-text justify-content-center align-items-center text-center text-white pt-4">
                      <div>
                        <h2 className="p-3">34</h2>
                      </div>
                      <div>
                        <h6>MACHINERY</h6>
                        <h2>Tools</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-4 count-text justify-content-center align-items-center text-center text-white pt-4">
                      <div>
                        <h2 className="p-3">76</h2>
                      </div>
                      <div>
                        <h6>MACHINERY</h6>
                        <h2>Tools</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-4 count-text justify-content-center align-items-center text-center text-white pt-4">
                      <div>
                        <h2 className="p-3">08</h2>
                      </div>
                      <div>
                        <h6>MACHINERY</h6>
                        <h2>Tools</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section>
        <div className="container py-5">
          <div className="row our-team">
            <div className="col-12">
              <div className="">
                <h1 className="ourteam p-5">OUR TEAM</h1>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="col-md-4 mt-3"
            >
              <div className="card border-0 rounded-0 overflow-hidden">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/team/team1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-body-tertiary border border-top-0 position-relative">
                  <h6 className="card-text text-center">UX Designer</h6>
                  <h2 className="card-title">Ethan Welch</h2>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="col-md-4 mt-3"
            >
              <div className="card border-0 rounded-0 overflow-hidden">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/team/team2.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-body-tertiary border border-top-0 position-relative">
                  <h6 className="card-text text-center">UX Designer</h6>
                  <h2 className="card-title">Ethan Welch</h2>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="col-md-4 mt-3"
            >
              <div className="card border-0 rounded-0 overflow-hidden">
                <img
                  src="https://themewagon.github.io/constructioncompany/assets/img/team/team3.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-body-tertiary border border-top-0 position-relative">
                  <h6 className="card-text text-center">UX Designer</h6>
                  <h2 className="card-title">Ethan Welch</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
