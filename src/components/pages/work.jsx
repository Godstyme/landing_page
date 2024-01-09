import React from "react";
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import svg1 from "../../assets/images/svg/svg1.svg"
import svg2 from "../../assets/images/svg/svg2.svg"
import svg3 from "../../assets/images/svg/svg3.svg"
import svg4 from "../../assets/images/svg/svg4.svg"
import svg5 from "../../assets/images/svg/svg5.svg"
import svg6 from "../../assets/images/svg/svg6.svg"

const Work = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <h1 className="text-uppercase">Work shocase.</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Branding</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Illustrations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Web</a>
              </li>
            </ul>
          </nav>
          <div className="row py-5">
            <div className="col-md-4">
              <div className="d-flex flex-column-reverse justify-content-center gap-5">
                <div className="col-md-4 product-showcase-large bg-success w-100 inner-con">
                  <img className="img-fluid" src={img4} alt="" />
                  <div className="img-decription text-center">
                    <h4>Lamp</h4>
                    <p>Branding</p>
                  </div>
                </div>
                <div className="col-md-4 product-showcase bg-primary w-100 inner-con">
                  <img className="img-fluid image" src={img1} alt="" />
                  <div className="img-decription text-center">
                    <h4>Lamp</h4>
                    <p>Branding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column-reverse justify-content-center gap-5">
              <div className="col-md-4 product-showcase bg-black w-100 inner-con">
                <img className="img-fluid" src={img5} alt="" />
                <div className="img-decription text-center">
                    <h4>Lamp</h4>
                    <p>Branding</p>
                </div>
              </div>
                <div className="col-md-4 product-showcase-large bg-dark w-100 inner-con">
                  <img className="img-fluid" src={img2} alt="" />
                  <div className="img-decription text-center">
                    <h4>Lamp</h4>
                    <p>Branding</p>
                  </div>
                </div>       
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column-reverse justify-content-center gap-5">
                <div className="col-md-4 product-showcase-large bg-secondary inner-con w-100">
                  <img className="img-fluid" src={img6} alt="" />
                  <div className="img-decription text-center">
                    <h4>Lamp</h4>
                    <p>Branding</p>
                  </div>
                </div>
                <div className="col-md-4 product-showcase bg-primary w-100 inner-con">
                  <img className="img-fluid" src={img3} alt="" />
                  <div className="img-decription text-center">
                    <h4>Lamp</h4>
                    <p>Branding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a className="btn btn-warning btn-lg text-uppercase fw-bolder banner-btn">Have work for us?</a>
          </div>
        </div>
        <div className="container-fluid bg-light py-4 ">
          <div className="container d-flex justify-content-between align-items-center svg-wrap">
            <img className="work-svg" src={svg1} alt="" />
            <img className="work-svg" src={svg2} alt="" />
            <img className="work-svg" src={svg3} alt="" />
            <img className="work-svg" src={svg4} alt="" />
            <img className="work-svg" src={svg5} alt="" />
            <img className="work-svg" src={svg6} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Work;