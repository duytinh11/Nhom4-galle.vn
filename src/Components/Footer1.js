// Footer.jsx
import React from "react";
import "../css/style.css"; // Optional: create and import your CSS
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    {/* Top Section */}
    <div className="footer-top">
      <div>
        <img
          src="https://marketplace.canva.com/YOIWE/MAD2b2YOIWE/1/tl/canva-clock-icon-MAD2b2YOIWE.png"
          alt="Clock Icon"
        />
        <p>
          <strong>MUA HÀNG ONLINE 24/7</strong>
          <br />
          Tất cả các ngày trong tuần
        </p>
      </div>
      <div>
        <img
          src="https://marketplace.canva.com/yzRgA/MAD2HUyzRgA/1/tl/canva-phone-icon-MAD2HUyzRgA.png"
          alt="Phone Icon"
        />
        <p>
          <strong>HOTLINE BÁN HÀNG</strong>
          <br />
          1800 6785
        </p>
      </div>
      <div>
        <img
          src="https://marketplace.canva.com/kkFtU/MAEgSdkkFtU/1/tl/canva-gear-outline-icon-MAEgSdkkFtU.png"
          alt="Gear Icon"
        />
        <p>
          <strong>HỖ TRỢ KĨ THUẬT</strong>
          <br />
          HN: 1800.6785 Nhánh 2
          <br />
          HCM: 1800.6785 Nhánh 3
        </p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="footer-brand-bar">
      <div className="brand-item">
        <img
          src="https://galle.vn/images/config/logo_1718252240.svg"
          alt="GALLE WATCH Logo"
        />
      </div>
      <div className="separator"></div>
      <div className="brand-item">
        <img
          src="https://galle.vn/images/config/logo_1720602535_1722855414.svg"
          alt="DONGHOTHUYSY.VN Logo"
        />
      </div>
      <div className="separator"></div>
      <div className="brand-item">
        <img
          src="https://galle.vn/images/config/gallecare-logo-vang_1722390098.png"
          alt="GALLECARE Logo"
        />
      </div>
      <div className="separator"></div>
      <div className="brand-item">
        <img
          src="https://galle.vn/images/config/873500x210_1729310864.png"
          alt="SEN Logo"
        />
      </div>
    </div>
    <hr className="footer-divider" />

    {/* Footer Main Content */}
    <div className="footer-container">
      <div className="footer-flex">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>THÔNG TIN LIÊN HỆ</h3>
          <p>
            <strong>CÔNG TY TNHH PHÂN PHỐI SẢN PHẨM CAO CẤP LPD</strong>
          </p>
          <p>41 Phố Thi Sách, P. Phạm Đình Hổ, Q. Hai Bà Trưng, Hà Nội</p>
          <p>393 Điện Biên Phủ, P.4, Q.3, TP. HCM</p>
          <p>Hotline: 1800 6785</p>
          <p>Email: info@lpd.com.vn</p>
          <p>MST: 0102001789</p>
          <div>
            <button className="support-button">Tư vấn hỗ trợ 1800 6785</button>
          </div>
          <div className="certifications">
            <h3>CHỨNG NHẬN</h3>
            <img
              src="https://galle.vn/images/config/image-11_1718448263.svg"
              width="124"
              height="47"
              alt="Đã thông báo Bộ Công Thương"
              className="certification-logo"
            />
            <img
              src="https://galle.vn/images/config/dmca_protected_sml_120al_1721815270.png"
              width="124"
              height="21"
              alt="DMCA Protected"
              className="dmca-logo"
            />
            <div className="payment-methods">
              <h3>PHƯƠNG THỨC THANH TOÁN</h3>
              <img
                src="https://galle.vn/images/config/visa_1718588005.svg"
                width="71"
                height="51"
                alt="Cash"
              />
              <img
                src="https://galle.vn/images/config/visa-1-_1718588005.svg"
                width="71"
                height="51"
                alt="Bank Transfer"
              />
              <img
                src="https://galle.vn/images/config/visa-2-_1718588005.svg"
                width="71"
                height="51"
                alt="ATM"
              />
              <img
                src="https://galle.vn/images/config/visa-3-_1718588005.svg"
                width="71"
                height="51"
                alt="Visa"
              />
              <img
                src="https://galle.vn/images/config/visa-4-_1718588005.svg"
                width="71"
                height="51"
                alt="MasterCard"
              />
              <img
                src="https://galle.vn/images/config/vnpay_1729072775.svg"
                width="71"
                height="51"
                alt="VNPay"
              />
            </div>
          </div>
        </div>
        {/* Footer Services */}
        <div className="footer-service">
          <div className="footer-column">
            <h3>DỊCH VỤ</h3>
            <ul>
              <li>
                <Link to={"/service"}>Cá nhân hoá - in khắc</Link>
              </li>
              <li>
                <Link to={"/repair"}>Dịch vụ sửa chữa</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>VỀ CHÚNG TÔI</h3>
            <ul>
              <li>
                <Link to={"/profile"}>Giới thiệu về Galle</Link>
              </li>
              <li>
                <Link to={"/news"}>Chứng nhận thương hiệu</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>TIN TỨC</h3>
            <ul>
              <li>
                <Link to={"/knowledge"}>Kiến thức đồng hồ</Link>
              </li>
              <li>
                <Link to={"/newfeed"}>Bản tin Galle</Link>
              </li>
              <li>
                <Link to={"/sale"}>Khuyến mại</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>CHĂM SÓC KHÁCH HÀNG</h3>
            <ul>
              <li>
                <Link to={"/member"}>Ưu đãi hội viên</Link>
              </li>
              <li>
                <Link to={"/return"}>Chính sách đổi sản phẩm</Link>
              </li>
              <li>
                <Link to={"/warranty"}>Chính sách bảo hành</Link>
              </li>
              <li>
                <Link to={"/comment"}>Góp ý - khiếu nại</Link>
              </li>
              <li>
                <Link to={"/security"}>Chính sách bảo mật thông tin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;