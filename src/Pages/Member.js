import { Col, Container, Row } from "react-bootstrap";
import "./Watch.css";

function Member() {
  return (
    <Container className="service mt-4">
      <Row className="mb-4">
          <Col>
            <h2 className="title fw-bold text-center">Ưu đãi đặc quyền hội viên Galle</h2>
            <h4 className="subtitle">ƯU ĐÃI ĐẶC QUYỀN HỘI VIÊN GALLE</h4>
            <h5 className="fw-bold mt-4">1. Ưu đãi hội viên</h5>
            <div className="text-center mt-3"><img src="/img/mem1.jpg" alt="img" className="img-fluid" /></div>
            <h5 className="fw-bold mt-4">2. Đặc quyền chăm sóc đồng hồ</h5>
            <div className="text-center mt-3"><img src="/img/mem2.jpg" alt="img" className="img-fluid" /></div>
            <hr/>
            <p><b><i>Để được tư vấn cụ thể, Quý khách hàng liên hệ tới Đồng hồ Galle qua:</i></b></p>
            <p><b>Hotline: <span className="text-danger">1800 6785</span></b></p>
            <p>
                Facebook: <a href="https://www.facebook.com/GalleWatch/" target="_blank" rel="noreferrer " className="text-primary">https://www.facebook.com/GalleWatch/</a>
            </p>            
          </Col>
      </Row>
    </Container>
  );
}

export default Member;