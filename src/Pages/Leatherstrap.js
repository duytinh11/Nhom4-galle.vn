import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Leatherstrap({ onAddToCart }) {
  const { addToCart } = useContext(CartContext);
  const watches = [
    { id: "0925002050-2-22", name: "Phụ Kiện Dây da HIRSCH James", price: "3.420.000₫", img: "img/wire1.webp" },
    { id: "0925002070-2-20", name: "Phụ Kiện Dây da HIRSCH James", price: "3.420.000₫", img: "img/wire2.webp" },
    { id: "02628125-2-14", name: "Phụ Kiện Dây da HIRSCH Princess", price: "900.000₫", img: "img/wire3.webp" },
    { id: "12302650-1-16", name: "Phụ Kiện Dây da HIRSCH Rainbow", price: "1.130.000₫", img: "img/wire4.webp" },
    { id: "12302670-1-12", name: "Phụ Kiện Dây da HIRSCH Rainbow", price: "1.130.000₫", img: "img/wire5.webp" },
    { id: "0927628050-2-20", name: "Phụ Kiện Dây da HIRSCH Andy", price: "1.120.000₫", img: "img/wire6.webp" },
    { id: "03828010-2-18", name: "Phụ Kiện Dây da HIRSCH Aristocrat", price: "1.120.000₫", img: "img/wire7.webp" },
    { id: "03828010-2-20", name: "Phụ Kiện Dây da HIRSCH Aristocrat", price: "1.500.000₫", img: "img/wire8.webp" }
  ];
  return (
    <Container className="watch-list mt-4">
      <h2 className="title fw-bold">Dây da</h2>
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
                     if (onAddToCart) onAddToCart();
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

export default Leatherstrap;