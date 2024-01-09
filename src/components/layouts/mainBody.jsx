import React from "react";
import hero1 from "../../assets/images/hero-image.png"

export const MainBody = () => {
  return (
    <>
      <main>
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <div className="fw-bolder banner-cap">
                  <h1>Hello!!!</h1>
                  <h1 className="py-2">We Are Creative <br/>  Digital Agency.</h1>
                </div>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus, enim, corrupti deserunt debitis.
                </p>
                <div className="py-3">
                  <a className="btn btn-warning btn-lg text-uppercase fw-bolder banner-btn">Send Message</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={hero1} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}