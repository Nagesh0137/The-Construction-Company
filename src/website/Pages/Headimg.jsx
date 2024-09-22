import React from "react";

export default function Headimg(props) {
  return (
    <>
      <section>
        <div className="container-fluid m-0 p-0">
          <div className="col-12 overflow-hidden">
            <div className="headimg">
              <div data-aos="zoom-in-up">
                <p>{props.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
