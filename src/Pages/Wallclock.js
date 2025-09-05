import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";
function Wallclock({ onAddToCart }) {
  const { addToCart } = useContext(CartContext);
  const watches = [
    { id: "QXM381BR", name: "Đồng hồ treo tường SEIKO",type:"Đồng hồ điện tử (Quartz)", price: "10.863.000₫", img: "img/wall1.webp" },
    { id: "QXC213BL", name: "Đồng hồ treo tường SEIKO",type:"Đồng hồ điện tử (Quartz)", price: "3.247.000₫", img: "img/wall2.webp" },
    { id: "QXA823SL", name: "Đồng hồ treo tường SEIKO",type:"33x4.9 cm Đồng hồ điện tử (Quartz)", price: "4.900.000₫", img: "img/wall3.webp" },
    { id: "QXA821WR", name: "Đồng hồ treo tường SEIKO",type:"29.6x29.6x4.1 cm Đồng hồ điện tử (Quartz)", price: "1.500.000₫", img: "img/wall4.webp" },
    { id: "QXA821WR", name: "Đồng hồ treo tường SEIKO",type:"57 x 24.5 x 10 cm", price: "8.900.000₫", img: "img/wall5.webp" },
    { id: "71002-032200", name: "Đồng hồ treo tường HERMLE",type:"62 x 15 x 10 cm Đồng hồ cơ (Mechanical)", price: "3.850.000₫", img: "img/wall6.webp" },
    { id: "70733-000711", name: "Đồng hồ treo tường HERMLE",type:"63.5 x 25 x 14 cm Đồng hồ cơ (Mechanical)", price: "3.890.000₫", img: "img/wall7.webp" },
    { id: "QXA821WR", name: "Đồng hồ treo tường SEIKO",type:"62 x 15 x 10 cm Đồng hồ cơ (Mechanical)", price: "21.890.000₫", img: "img/wall8.webp" }
  ];
  return (
    <Container className="watch-list mt-4">
      <h2 className="title fw-bold">Đồng hồ treo tường cao cấp sang trọng tại Đồng hồ Galle</h2>
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
                <Button
                    variant="primary"
                    className="watch-btn"
                    onClick={() => {
                      addToCart(watch);
                      if (onAddToCart) onAddToCart();
                    }}
                  >
                    Thêm vào giỏ
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Wallclock;