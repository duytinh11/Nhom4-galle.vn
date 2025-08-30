import { Col, Container, Row } from "react-bootstrap";
import "./Watch.css";

function Comment() {
  return (
    <Container className="service mt-4">
      <Row className="mb-4">
          <Col>
            <h2 className="title fw-bold text-center">Góp ý - khiếu nại</h2>
            <h4 className="subtitle">GÓP Ý - KHIẾU NẠI</h4>
            <p>
                Nhằm nâng cao chất lượng phục vụ, cung cấp cho khách hàng những dịch vụ và sản phẩm tốt nhất, 
                Galle Watch luôn lắng nghe và giải đáp mọi thắc mắc, góp ý, khiếu nại.
            </p>
            <p>
                Quý khách hàng có thể gửi góp ý, thắc mắc hoặc những phản hồi về sản phẩm theo các cách sau:
            </p>
            <ul>
                <li>
                    Liên hệ trực tiếp tới số Hotline  <strong><font color="red">1800 6785</font></strong>
                </li>
                <li>
                    Để lại lời nhắn trên website  <strong><a href="https://galle.vn">Galle.vn</a></strong> và Fanpage <strong><a href="https://www.facebook.com/GalleWatch">Galle Watch</a></strong>
                </li>
            </ul> 
            <p>
                Nhân viên chăm sóc khách hàng sẽ tiếp nhận ý kiến của khách hàng, phân tích, đánh giá và trả lời trực tiếp qua 
                điện thoại/tin nhắn/email trong thời gian sớm nhất. 
            </p>          
          </Col>
      </Row>
    </Container>
  );
}

export default Comment;