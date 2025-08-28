// src/components/Header.js
import React from "react";

function Header() {
  return (
    <header className="header1">
      <div className="container">
        {/* Header Top */}
        <div className="header1-top">
          {/* Trái */}
          <div className="header1-left">
            <a href="#" className="item">
              <img
                src="https://galle.vn/images/config/location_1718256784.svg"
                alt="Store"
              />
              <span>HỆ THỐNG CỬA HÀNG</span>
            </a>
            <a href="tel:18006785" className="item">
              <img
                src="https://galle.vn/images/config/call-dark_1718256807.svg"
                alt="Hotline"
              />
              <span>1800 6785</span>
            </a>
          </div>

          {/* Logo */}
          <div className="header1-logo">
            <a href="#">
              <img
                src="https://galle.vn/images/config/logo_1718252240.svg"
                alt="Galle Watch"
              />
            </a>
          </div>

          {/* Phải */}
          <div className="header1-right">
            <div className="search-box">
              <input type="text" placeholder="Tìm Kiếm" />
              <button>
                <img src="/img/seach.jpg" height="24" alt="Search" />
              </button>
            </div>
            <a href="#">
              <img
                src="https://galle.vn/images/config/account-dark_1718256807.svg"
                alt="Account"
              />
            </a>
            <a href="#">
              <img
                src="https://galle.vn/images/config/favorite-dark_1718256807.svg"
                alt="Favorite"
              />
            </a>
            <a href="#">
              <img
                src="https://galle.vn/images/config/bag-dark_1718256807.svg"
                alt="Cart"
              />
            </a>
          </div>
        </div>
      </div>
       {/* Nav */}
      <nav className="nav">
        <div className="container nav__container">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img src="/img/trangchu.png" alt="Trang chủ" height="20" />
                Trang chủ
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img src="/img/thuonghieu.png" alt="Thương hiệu" height="20" />
                Thương hiệu
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img
                  src="/img/donghodeotay.png"
                  alt="Đồng hồ đeo tay"
                  height="20"
                />
                Đồng hồ đeo tay
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img
                  src="/img/donghotreotuong.png"
                  alt="Đồng hồ trang trí"
                  height="20"
                />
                Đồng hồ trang trí
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img src="/img/batlua.png" alt="Phụ kiện" height="20" />
                Phụ kiện
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img src="/img/phukien.png" alt="Dịch vụ" height="20" />
                Dịch vụ
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img
                  src="/img/suachua.png"
                  alt="Sửa chữa Galle Care"
                  height="20"
                />
                Sửa chữa Galle Care
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <img src="/img/tintuc.png" alt="Tin tức" height="20" />
                Tin tức
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link nav__sale">
                SALE
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;