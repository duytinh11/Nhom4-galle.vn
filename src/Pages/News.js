import { Col, Container, Row } from "react-bootstrap";
import "./Watch.css";

function News() {
  return (
    <Container className="service mt-4">
      <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center">Chứng nhận đại lý ủy quyền chính thức thương hiệu Baume & Mercier tại Việt Nam</h2>
            <p>Là hệ thống phân phối đồng hồ và phụ kiện chính hãng hàng đầu Việt Nam, Đồng hồ Galle tự hào là nhà bán lẻ ủy 
                quyền của thương hiệu Baume & Mercier tại Việt Nam. Bạn có thể tìm mua đồng hồ Daniel Klein tại hơn 20 showroom 
                của hệ thống Đồng hồ Galle.
            </p>
            <p>
                Dưới đây là giấy chứng nhận đại lý ủy quyền chính thức thương hiệu Baume & Mercier tại Việt Nam.
            </p>
            <div className="mt-3"><img src="/img/new1.jpg" alt="img" className="newimg img-fluid" /></div>
          </Col>
      </Row>
    </Container>
  );
}

export default News;