import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Boxclock({ onAddToCart }) {
  const { addToCart } = useContext(CartContext);
  const watches = [
    { id: "1WR-BRG", name: "Hộp đựng đồng hồ Driklux", price: "1.000.000₫", img: "img/box1.webp" },
    { id: "WB-3085-DBC-KC", name: "Hộp đựng đồng hồ Driklux", price: "3.000.000₫", img: "img/box2.webp" },
    { id: "TG803-6DBC", name: "Hộp đựng đồng hồ Driklux", price: "3.000.000₫", img: "img/box3.webp" },
    { id: "P9BR-F-9-LED-P-FL", name: "Hộp xoay đồng hồ Driklux", price: "35.400.000₫", img: "img/box4.webp" },
    { id: "A9", name: "Hộp xoay đồng hồ Driklux", price: "3.100.000₫", img: "img/box5.webp" },
    { id: "T4BRB-F-9-LED", name: "Hộp xoay đồng hồ Driklux", price: "18.450.000₫", img: "img/box6.webp" },
    { id: "1041BR-OS-F-5THM", name: "Hộp quay đồng hồ Driklux", price: "7.400.000₫", img: "img/box7.webp" },
    { id: "024BC-F-5", name: "Hộp xoay đồng hồ Driklux", price: "Liên hệ", img: "img/box8.webp" }
  ];
  return (
    <Container className="watch-list mt-4">
      <h2 className="title fw-bold">Hộp đồng hồ</h2>
      <hr />
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
                  <strong>Giá:</strong> {watch.price}
                </Card.Text>
                <div className="mt-auto">
                   <Button
                    variant="primary"
                    className="watch-btn"
                    onClick={() => {
                      addToCart(watch);
                       if (onAddToCart) onAddToCart();// Gọi hàm mở popup cart nếu có
                    }}
                  >
                    Thêm vào giỏ
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Boxclock;