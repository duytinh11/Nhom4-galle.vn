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
                  src="/img/anhbaner1.jpg"
                  className="d-block w-100 h-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/anhbaner2.jpg"
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
      <div>
         <div className="feature-bar">
      <div className="feature-item">
        <img src="imgs/icon1.png" alt="Bảo hành" className="feature-icon" />
        <div className="feature-text">
          <p className="feature-title">Trung tâm bảo hành chính hãng</p>
          <p className="feature-sub">TIÊU CHUẨN THỤY SĨ</p>
        </div>
      </div>

      <div className="feature-item">
        <img src="imgs/icon2.png" alt="Uy tín" className="feature-icon" />
        <div className="feature-text">
          <p className="feature-title">Thương hiệu uy tín</p>
          <p className="feature-sub">22 NĂM PHÁT TRIỂN</p>
        </div>
      </div>

      <div className="feature-item">
        <img src="imgs/icon3.png" alt="Đa dạng" className="feature-icon" />
        <div className="feature-text">
          <p className="feature-title">Đa dạng thương hiệu</p>
          <p className="feature-sub">30+ THƯƠNG HIỆU CHÍNH HÃNG</p>
        </div>
      </div>
    </div>
      </div>
    </div>
    
    
  );
};

export default BannerSection;
