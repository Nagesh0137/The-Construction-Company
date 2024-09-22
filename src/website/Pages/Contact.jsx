import React from "react";
import Headimg from "./Headimg";
export default function Contacts() {
  return (
    <>
      <Headimg title="CONTACT"></Headimg>
      <section>
        <div className="container text-center p-5 d-none d-md-block">
          <iframe
            title="contact us"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7540.104254167369!2d74.73032800000001!3d19.105369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb17ca9d749e5%3A0x516744f9b2f35ec9!2sA2Z%20IT%20HUB%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1715338350946!5m2!1sen!2sin"
            width="800"
            height="600"
            className="border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div>
                <form>
                  <h4>Get in Touch</h4>
                  <textarea className="p-5 w-100 h-"></textarea>
                  <br />
                  <input
                    type="text"
                    className="p-2 w-50"
                    placeholder="Enter Your Name"
                  ></input>
                  <input
                    type="email"
                    className=" w-50 p-2"
                    placeholder="Email"
                  ></input>
                  <br />
                  <input
                    type="text"
                    className="p-2 mt-2"
                    placeholder="Subject"
                  ></input>
                  <br />
                  <br />
                  <button className="btn p-3 px-5 btn-info">SEND</button>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="container p-5">
                <div className="row">
                  <div className="col-12">
                    <div className="float-start">
                      <i className="fa-solid fa-house fs-2"></i>
                    </div>
                    <div className="float-start ps-3">
                      <b>Buttonwood, California.</b>
                      <p>Rosemead, CA 91770</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="float-start">
                      <i className="fa-solid fa-mobile-screen-button fs-2"></i>
                    </div>
                    <div className="float-start ps-3">
                      <b>+1 253 565 2365</b>
                      <p>Mon to Fri 9am to 6pm</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="float-start">
                      <i className="fa-solid fa-envelope fs-2"></i>
                    </div>
                    <div className="float-start ps-3">
                      <b>support@colorlib.com</b>
                      <p>Send us your query anytime!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
