import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Watch.css";

function Garmin() {
    const watches = [
        { id: "010-02582-18", name: "Đồng hồ Garmin Epix Gen 2",type:"47 mm", price: "24.990.000₫", img: "/img/garmin1.webp" },
        { id: "010-02159-5F", name: "Đồng hồ Garmin Fenix 6S",type:"42 mm", price: "14.990.000₫", img: "img/garmin2.webp" },
        { id: "010-02429-73", name: "Đồng hồ Garmin Venu 2S",type:"40 mm", price: "10.490.000₫", img: "img/garmin3.webp" },
        { id: "010-02641-53", name: "Đồng hồ Garmin Forerunner 255",type:"46 mm", price: "8.990.000₫", img: "img/garmin4.webp" },
        { id: "010-02429-73", name: "Đồng hồ Garmin Venu 2S",type:"43.6 mm", price: "10.490.000₫", img: "img/garmin5.webp" },
        { id: "010-02426-81", name: "Đồng hồ Garmin Venu SQ Music",type:"40.6 mm" ,price: "6.190.000₫", img: "img/garmin6.webp" },
        { id: "010-02641-53", name: "Đồng hồ Garmin Forerunner 255",type:"46 mm" ,price: "8.990.000₫", img: "img/garmin7.webp" },
        { id:"010-02384-52", name:"Đồng hồ Garmin Lily",type:"34.5 mm", price:"4.990.000₫", img:"img/garmin8.webp"}
    ];
    return (
        <Container className="watch-list mt-4">
            <h2 className="title fw-bold">Đồng hồ Garmin chính hãng</h2>
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

export default Garmin;