import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Deskclock({ onAddToCart }) {
  const { addToCart } = useContext(CartContext);
  const watches = [
    { id: "22948-Q10352", name: "Đồng hồ để bàn Hermle", price: "146.059.000₫", img: "img/desk1.webp" },
    { id: "QXJ013BL", name: "Đồng hồ để bàn SEIKO", price: "4.300.000₫", img: "img/desk2.webp" },
    { id: "23020-500721", name: "Đồng hồ để bàn Hermle", price: "5.490.000₫", img: "img/desk3.webp" },
    { id: "23002-000352", name: "Đồng hồ để bàn Hermle", price: "303.479.000₫", img: "img/desk4.webp" },
    { id: "QHE906WN", name: "Đồng hồ để bàn Seiko", price: "800.000₫", img: "img/desk5.webp" },
    { id: "QHG106GL", name: "Đồng hồ để bàn điện tử Seiko", price: "Liên hệ", img: "img/desk6.webp" },
    { id: "22864-030340", name: "Đồng hồ để bàn Hermle", price: "62.159.000₫", img: "img/desk7.webp" },
    { id: "C4766/3", name: "Đồng hồ Candino nữ Lady Elegance", price: "25.000.000₫", img: "img/desk8.webp" }
  ];
  return (
    <Container className="watch-list mt-4">
      <h2 className="title fw-bold">Các mẫu đồng hồ để bàn trang trí chính hãng tại Galle</h2>
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

export default Deskclock;