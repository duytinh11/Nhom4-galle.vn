import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Components/Banner";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./Watch.css";

function Home() {
  const watches = [
    { id: "010-02582-18", name: "Đồng hồ Garmin Epix Gen 2",type:"47 mm", price: "24.990.000₫", img: "/img/garmin1.webp" },
    { id: "010-02159-5F", name: "Đồng hồ Garmin Fenix 6S",type:"42 mm", price: "14.990.000₫", img: "img/garmin2.webp" },
    { id: "010-02429-73", name: "Đồng hồ Garmin Venu 2S",type:"40 mm", price: "10.490.000₫", img: "img/garmin3.webp" },
    { id: "010-02641-53", name: "Đồng hồ Garmin Forerunner 255",type:"46 mm", price: "8.990.000₫", img: "img/garmin4.webp" },
    { id: "22948-Q10352", name: "Đồng hồ để bàn Hermle", price: "146.059.000₫", img: "img/desk1.webp" },
    { id: "QXJ013BL", name: "Đồng hồ để bàn SEIKO", price: "4.300.000₫", img: "img/desk2.webp" },
    { id: "23020-500721", name: "Đồng hồ để bàn Hermle", price: "5.490.000₫", img: "img/desk3.webp" },
    { id: "23002-000352", name: "Đồng hồ để bàn Hermle", price: "303.479.000₫", img: "img/desk4.webp" },
    { id: "0925002050-2-22", name: "Phụ Kiện Dây da HIRSCH James", price: "3.420.000₫", img: "img/wire1.webp" },
    { id: "0925002070-2-20", name: "Phụ Kiện Dây da HIRSCH James", price: "3.420.000₫", img: "img/wire2.webp" },
    { id: "T4BRB-F-9-LED", name: "Hộp xoay đồng hồ Driklux", price: "18.450.000₫", img: "img/box6.webp" },
    { id: "1041BR-OS-F-5THM", name: "Hộp quay đồng hồ Driklux", price: "7.400.000₫", img: "img/box7.webp" }
  ];
  const services = [
    { title: "DỊCH VỤ", highlight: "SỬA CHỮA", sub: "ĐỒNG HỒ", imgMain: "/img/dichvu1.webp", imgSmall: "/img/dichvu2.webp",link: "/repair" },
    { title: "DỊCH VỤ", highlight: "IN LOGO", sub: "KHẮC LASER", imgMain: "/img/dichvu3.webp", imgSmall: "/img/dichvu4.webp", link: "/service" }
  ];
  const features =[
    {icon:"img/icon1.png", text:"ĐI ĐẦU VỀ CHẤT LƯỢNG DỊCH VỤ"},
    {icon:"img/icon1.png", text:"100% SẢN PHẨM CHÍNH HÃNG"},
    {icon:"img/icon2.png", text:"MIỄN PHÍ VẬN CHUYỂN"},
    {icon:"img/icon3.png", text:"THAY PIN MIỄN PHÍ TRỌN ĐỜI"},
    {icon:"img/icon4.png", text:"HỖ TRỢ TRẢ GÓP 0%"},
  ];
  return (
    <Container className="watch-list mt-4">
      <Banner />
      <div className="text-center mt-3 mb-3"><img src="/img/home1.webp" alt="img" className="home-img"/></div>
      <h2 className="title fw-bold">Sản phẩm bán chạy</h2>
      <hr/>
      <Row>
        {watches.slice(0, 4).map((watch) => (
          <Col key={watch.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="watch-card h-100 shadow-sm">
              <Card.Img variant="top" src={watch.img} alt={watch.name} className="watch-img"/>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="watch-title">{watch.name}</Card.Title>
                <Card.Text className="watch-text">
                  <strong>Mã:</strong> {watch.id} <br />
                  <p>{watch.type}</p>
                  <strong>Giá:</strong> {watch.price}
                </Card.Text>
                <div className="mt-auto"> 
                  <Button variant="primary" className="watch-btn">Thêm vào giỏ</Button>
                </div>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3 mb-3"><img src="/img/home2.webp" alt="img" className="home-img"/></div>
      <h2 className="title fw-bold">Đồng hồ trang trí</h2>
      <hr/>
      <Row>
        {watches.slice(4, 8).map((watch) => (
          <Col key={watch.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="watch-card h-100 shadow-sm">
              <Card.Img variant="top" src={watch.img} alt={watch.name} className="watch-img"/>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="watch-title">{watch.name}</Card.Title>
                <Card.Text className="watch-text">
                  <strong>Mã:</strong> {watch.id} <br />
                  <strong>Giá:</strong> {watch.price}
                </Card.Text>
                <div className="mt-auto"> 
                  <Button variant="primary" className="watch-btn">Thêm vào giỏ</Button>
                </div>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3 mb-3"><img src="/img/home3.webp" alt="img" className="home-img"/></div>
      <h2 className="title fw-bold">Phụ kiện</h2>
      <hr/>
      <Row>
        {watches.slice(8, 12).map((watch) => (
          <Col key={watch.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="watch-card h-100 shadow-sm">
              <Card.Img variant="top" src={watch.img} alt={watch.name} className="watch-img"/>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="watch-title">{watch.name}</Card.Title>
                <Card.Text className="watch-text">
                  <strong>Mã:</strong> {watch.id} <br />
                  <strong>Giá:</strong> {watch.price}
                </Card.Text>
                <div className="mt-auto"> 
                  <Button variant="primary" className="watch-btn">Thêm vào giỏ</Button>
                </div>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="title fw-bold text-center">Các dịch vụ tại Galle</h2>
      <hr/>
      <Row>
        {services.map((service, index) => (
          <Col md={6} key={index} className="mb-4">
            <div className="servicehome text-center">
              <h5>{service.title}</h5>
              <h3>
                <span className="highlight">{service.highlight}</span>
              </h3>
              <h6>{service.sub}</h6>

              <div className="servicehome-images">
                <img src={service.imgMain} alt="main" className="img-main" />
                <img src={service.imgSmall} alt="small" className="img-small" />
              </div>
              <div className="mt-3">
                <Link to={service.link}>
                  <Button className="servicehome-btn">TÌM HIỂU NGAY</Button>
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <h2 className="title fw-bold text-center">LÝ DO LỰA CHỌN GALLE</h2>
      <hr/>
      <Row>
        <div className="why-list">
          {features.map((item, index) => (
            <div className="why-item" key={index}>
              <div className="icon-box">
                <img src={item.icon} alt={item.text} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Row>
      <br/>
    </Container>
  );
}

export default Home;
