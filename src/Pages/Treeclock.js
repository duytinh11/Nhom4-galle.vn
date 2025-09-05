import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Treeclock({ onAddToCart }) {
  const { addToCart } = useContext(CartContext);
  const watches = [
    { id: "01231-030451", name: "Đồng hồ cây Hermle", price: "55.059.000₫", img: "img/tree1.webp" },
    { id: "01210-031171", name: "Đồng hồ cây Hermle", price: "325.300.000₫", img: "img/tree2.webp" },
    { id: "01131-031171", name: "Đồng hồ cây Hermle", price: "242.490.000₫", img: "img/desk3.webp" },
    { id: "01093-031171", name: "Đồng hồ cây Hermle", price: "180.479.000₫", img: "img/tree4.webp" },
    { id: "01079-030451", name: "Đồng hồ cây Hermle", price: "65.800.000₫", img: "img/tree5.webp" },
    { id: "01245-740791", name: "Đồng hồ cây Hermle", price: "43.850.000₫", img: "img/tree6.webp" },
    { id: "01232-030271", name: "Đồng hồ cây Hermle", price: "46.759.000₫", img: "img/tree7.webp" },
    { id: "01168-031161", name: "Đồng hồ cây Hermle", price: "Liên hệ", img: "img/tree8.webp" }
  ];
  return (
    <Container className="watch-list mt-4">
      <h2 className="title fw-bold">Đồng hồ cây</h2>
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

export default Treeclock;