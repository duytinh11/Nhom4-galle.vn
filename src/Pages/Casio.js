import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Casio() {
    const watches = [
        { id: "GM-2100-1ADR", name: "Đồng Hồ Nam CASIO G-SHOCK",type:"49.3 x 44.4 mm | Đồng hồ điện tử (Quartz)", price: "7.628.000₫", img: "/img/casio1.webp" },
        { id: "GAE-2100WE-3ADR", name: "Đồng Hồ Nam CASIO G-SHOCK",type:"48.5 x 45.4 mm | Đồng hồ điện tử (Quartz)", price: "6.800.000₫", img: "img/casio2.webp" },
        { id: "GA-110SGH-4ADR", name: "Đồng Hồ Nam CASIO G-SHOCK",type:"55 x 51.2 mm | Đồng hồ điện tử (Quartz)", price: "6.000.000₫", img: "img/casio3.webp" },
        { id: "GA-2110SL-4A4DR", name: "Đồng Hồ nữ CASIO G-SHOCK",type:"48.5 x 45.4 mm Đồng hồ điện tử (Quartz)", price: "4.700.000₫", img: "img/casio4.webp" },
        { id: "GA-2110SL-4A7DR", name: "Đồng Hồ nữ CASIO G-SHOCK",type:"48.5 x 45.4 mm | Đồng hồ điện tử (Quartz)", price: "4.700.000₫", img: "img/casio5.webp" },
        { id: "GMA-S2100SK-2ADR", name: "Đồng Hồ Nữ CASIO G-SHOCK",type:"46.2 x 42.9 mm | Đồng hồ điện tử (Quartz)" ,price: "4.200.000₫", img: "img/casio6.webp" },
        { id: "MTP-M305L-1AVDF", name: "Đồng hồ Nam Casio",type:"48.5 x 44.4 mm | Đồng hồ điện tử (Quartz)" ,price: "3.600.000₫", img: "img/casio7.webp" },
        { id:"GMA-S2100BS-7ADR", name:"Đồng Hồ Nữ CASIO G-SHOCK",type:"46.2 x 42.9 mm | Đồng hồ điện tử (Quartz)", price:"3.900.000₫", img:"img/casio8.webp"}
    ];
    return (
        <Container className="watch-list mt-4">
            <h2 className="title fw-bold">Đồng hồ Casio chính hãng</h2>
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

export default Casio;