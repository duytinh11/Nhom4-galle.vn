import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Sale() {
  const watches = [
    { id: "FUG1R001W6", name: "Đồng hồ Orient",type:"41.5 mm | Đồng hồ cơ (Mechanical)", price: "4.800.000₫", sale:"4.320.000₫", img: "img/sale1.webp" },
    { id: "FET0P002W0", name: "Đồng hồ Orient SUN and MOON Gen 1",type:"41.5 mm | Đồng hồ cơ (Mechanical)", price: "9.990.000₫", sale:"8.991.000₫", img: "img/sale2.webp" },
    { id: "SEL05002B0", name: "Đồng hồ Orient Star",type:"38.5 mm | Đồng hồ cơ (Mechanical)", price: "13.600.000₫", sale:"12.240.000₫", img: "img/sale3.webp" },
    { id: "262/31/126MG", name: "Đồng hồ Enicar",type:"37 mm | Đồng hồ điện tử (Quartz)", price: "15.700.000₫", sale:"14.130.000₫", img: "img/sale4.webp" },
    { id: "255/30/280G", name: "Đồng hồ Enicar", type:"36 mm | Đồng hồ điện tử (Quartz)", price: "17.840.000₫", sale:"14.130.000₫", img: "img/sale5.webp" },
    { id: "409975-410404", name: "Đồng hồ Roamer", type:"41 mm | Đồng hồ điện tử (Quartz)", price: "9.300.000₫", sale:"8.370.000₫", img: "img/sale6.webp" },
    { id: "262/31/126MG", name: "Đồng hồ Enicar", type:"37 mm | Đồng hồ điện tử (Quartz)", price: "12.920.000₫",sale:"11.628.000₫", img: "img/sale7.webp" },
    { id: "FC-980N3H6", name: "Đồng Hồ Nam Frederique Constant Manufacture Classic Tourbillon", type:"39 mm | Đồng hồ cơ (Mechanical)", price: "528.590.000₫",sale:"475.731.000₫", img: "img/sale8.webp" }
  ];
  return (
    <Container className="watch-list mt-4">
        <h2 className="title fw-bold text-center">Sản phẩm khuyến mãi</h2>
        <hr/>
        <Row>
            {watches.map((watch) => (
            <Col key={watch.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="watch-card h-100 shadow-sm">
                    <div className="discount-badge">-10%</div>
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
                        <div className="oldprice">Giá: {watch.price}</div>
                        <strong>Giá KM:</strong> <span className="saleprice">{watch.sale}</span>
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

export default Sale;