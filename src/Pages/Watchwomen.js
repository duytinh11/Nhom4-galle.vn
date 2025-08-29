import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Watchwomen() {
  const watches = [
    { id: "C4667/1", name: "Đồng hồ nữ Candino",type:"30 mm | Đồng hồ điện tử (Quartz)", price: "7.000.000₫", img: "img/dh7.webp" },
    { id: "C4721/1", name: "Đồng hồ Nữ Candino Lady Elegance",type:"33 mm | Đồng hồ điện tử (Quartz)", price: "5.000.000₫", img: "img/dh8.webp" },
    { id: "C4721/2", name: "Đồng hồ Nữ Candino Lady Elegance",type:"33 mm | Đồng hồ điện tử (Quartz)", price: "4.900.000₫", img: "img/dh9.webp" },
    { id: "C4721/4", name: "Đồng hồ nữ Candino",type:"33 mm | Đồng hồ điện tử (Quartz)", price: "4.000.000₫", img: "img/dh10.webp" },
    { id: "FC-200MPW2AC3B", name: "Đồng hồ Nữ Frederique Constant Classics Art Deco Carree",type:"21 mm | Đồng hồ điện tử (Quartz)", price: "41.090.000₫", img: "img/dh14.webp" },
    { id: "FC-200MPW2AC2B", name: "Đồng hồ Nữ Frederique Constant Classics Art Deco Carree",type:"28 mm | Đồng hồ điện tử (Quartz)", price: "41.089.000₫", img: "img/dh15.webp" },
    { id: "FC-240MPWD2NH22B", name: "Đồng hồ Nữ Frederique Constant Highlife Ladies Quartz",type:"31 mm | Đồng hồ điện tử (Quartz)", price: "55.790.000₫", img: "img/dh16.webp" },
    { id: "C4766/3", name: "Đồng hồ Candino nữ Lady Elegance",type:"34 mm | Đồng hồ điện tử (Quartz)", price: "6.089.000₫", img: "img/dh10.webp" }
  ];
  return (
    <Container className="watch-list mt-4">
      <h2 className="title fw-bold">Bộ sưu tập Đồng hồ nữ chính hãng tại Đồng hồ Galle</h2>
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

export default Watchwomen;