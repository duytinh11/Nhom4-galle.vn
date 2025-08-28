import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const BannerSection = () => {
  return (
    <div className="container my-4">
      <div className="row g-3">
        {/* Slider bên trái */}
        <div className="col-md-8">
          <div
            id="mainCarousel"
            className="carousel slide h-100"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded-custom shadow-sm h-100">
              <div className="carousel-item active">
                <img
                  src="/img/1.png"
                  className="d-block w-100 h-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/2.png"
                  className="d-block w-100 h-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/baner3.png"
                  className="d-block w-100 h-100"
                  alt="Slide 3"
                />
              </div>
            </div>

            {/* Nút điều khiển */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* 2 banner bên phải */}
        <div className="col-md-4 d-flex flex-column gap-3">
          <div className="ratio ratio-16x9 banner">
            <img
              src="/img/1.png"
              className="w-100 h-100 rounded-custom shadow-sm"
              alt="Banner 1"
            />
          </div>
          <div className="ratio ratio-16x9 banner">
            <img
              src="/img/2.png"
              className="w-100 h-100 rounded-custom shadow-sm"
              alt="Banner 2"
            />
          </div>
        </div>
      </div>

      {/* Ảnh ngang ở trung tâm */}
      <div className="trungtam mt-3">
        <img src="imgs/22.jpg" alt="anhngang" />
      </div>
    </div>
  );
};

export default BannerSection;
