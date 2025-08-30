import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
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
              <Link to="/" className="nav__link">
                <img src="/img/trangchu.png" alt="Trang chủ" height="20" />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <NavDropdown 
                title={
                  <span className="nav__link">
                    <img src="/img/thuonghieu.png" alt="Thương hiệu" height="20" style={{ marginRight: "6px" }}/>
                    Thương hiệu
                  </span>
                } 
                  id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/casio"><img src="/img/brand1.webp" alt="Casio" style={{ width: "100px", height: "auto" }} /></NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/garmin"><img src="/img/brand2.webp" alt="Garmin" style={{ width: "100px", height: "auto" }} /></NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav__item">
              <NavDropdown 
                title={
                  <span className="nav__link">
                    <img src="/img/donghodeotay.png" alt="Đồng hồ đeo tay" height="20" style={{ marginRight: "6px" }}/>
                    Đồng hồ đeo tay
                  </span>
                } 
                  id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/watchmen">Đồng hồ nam</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/watchwomen">Đồng hồ nữ</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav__item">
              <NavDropdown 
                title={
                  <span className="nav__link">
                    <img src="/img/donghotreotuong.png" alt="Đồng hồ trang trí" height="20" style={{ marginRight: "6px" }}/>
                    Đồng hồ trang trí
                  </span>
                } 
                  id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/wallclock">Đồng hồ treo tường</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deskclock">Đồng hồ để bàn</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/treeclock">Đồng hồ cây</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav__item">
              <NavDropdown 
                title={
                  <span className="nav__link">
                    <img src="/img/batlua.png" alt="Phụ kiện"  height="20" style={{ marginRight: "6px" }}/>
                    Phụ kiện
                  </span>
                } 
                  id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/boxclock">Hộp đồng hồ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/leatherstrap">Dây da</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav__item">
              <NavDropdown 
                title={
                  <span className="nav__link">
                    <img src="/img/phukien.png" alt="Dịch vụ" height="20" style={{ marginRight: "6px" }}/>
                    Dịch vụ
                  </span>
                } 
                  id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/service">In khắc</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav__item">
              <Link to="/repair" className="nav__link">
                <img src="/img/suachua.png" alt="Sửa chữa Galle Care" height="20"/>
                Sửa chữa 
              </Link>
            </li>
            <li className="nav__item">
              <NavDropdown 
                title={
                  <span className="nav__link">
                    <img src="/img/tintuc.png" alt="Tin tức" height="20" style={{ marginRight: "6px" }}/>
                    Tin tức
                  </span>
                } 
                  id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/knowledge">Kiến thức đồng hồ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/news">Chứng nhận thương hiệu</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/newfeed">Bản tin đồng hồ</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav__item">
              <Link to="/sale" className="nav__link nav__sale">SALE</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;