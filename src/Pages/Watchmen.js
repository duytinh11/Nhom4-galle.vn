import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Watchmen() {
  const watches = [
    { id: "FC-718WNWM4H6", name: "Frederique Constant Vietnam Limited Edition 2025",type:"42 mm | Đồng hồ cơ (Mechanical)", price: "168.000.000₫", img: "/img/dh1.webp" },
    { id: "RE-AT0018S00B", name: "Đồng hồ Nam Orient Star Phiên bản giới hạn 2025",type:"39.3 mm | Đồng hồ cơ (Mechanical)", price: "28.800.000₫", img: "img/dh2.webp" },
    { id: "RA-AS0105S30B", name: "Đồng hồ Nam Orient Phiên bản đặc biệt 2025",type:"41.5 mm | Đồng hồ cơ (Mechanical)", price: "16.800.000₫", img: "img/dh3.webp" },
    { id: "RA-AS0106L30B", name: "Đồng hồ Nam Orient Phiên bản đặc biệt 2025",type:"41.5 mm | Đồng hồ cơ (Mechanical)", price: "16.000.000₫", img: "img/dh4.webp" },
    { id: "FC-303TA3DNH6", name: "Đồng Hồ Nam Frederique Constant HIGHLIFE",type:"33 mm | Đồng hồ điện tử (Quartz)", price: "8.900.000₫", img: "img/dh5.webp" },
    { id: "RA-AK0802S30B", name: "Đồng Hồ Nam ORIENT Classic Sun and Moon",type:"41.5 mm | Đồng hồ cơ (Mechanical)" ,price: "10.000.000₫", img: "img/dh11.webp" },
    { id: "C032.451.11.047.00", name: "Đồng Hồ Nam Certina DS Action Day-Date",type:"43 mm | Đồng hồ điện tử (Quartz)" ,price: "16.900.000₫", img: "img/dh12.webp" },
    { id:"RE-AY0121A00B", name:"Đồng hồ Nam Orient Star Classic Moonphase",type:"41 mm | Đồng hồ cơ (Mechanical)", price:"55.900.000₫", img:"img/dh13.webp"}
  ];
  return (
    <Container className="watch-list mt-4">
      <h2 className="title fw-bold">Bộ sưu tập Đồng hồ nam chính hãng tại Đồng hồ Galle</h2>
      <hr/>
      <Row>
        {watches.map((watch) => (
          <Col key={watch.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="watch-card h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={watch.img}
                alt={watch.name}
                className="watch-img"
              />
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
    </Container>
  );
}

export default Watchmen;