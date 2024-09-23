import React from "react";
import Headimg from "./Headimg";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Headimg title="ABOUT US"></Headimg>
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
        {/* our team */}
        <section>
          <div className="container pt-5">
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
                <div className="card shadow-lg border-0 rounded-0 overflow-hidden">
                  <img
                    src="https://themewagon.github.io/constructioncompany/assets/img/team/team1.png"
                    className="card-img-top rounded-0"
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
                <div className="card border-0 shadow-lg mt-4 mt-md-0 rounded-0 overflow-hidden">
                  <img
                    src="https://themewagon.github.io/constructioncompany/assets/img/team/team2.png"
                    className="card-img-top rounded-0"
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
                <div className="card border-0 rounded-0 shadow-lg mt-4 mt-md-0 overflow-hidden">
                  <img
                    src="https://themewagon.github.io/constructioncompany/assets/img/team/team3.png"
                    className="card-img-top rounded-0"
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
}
