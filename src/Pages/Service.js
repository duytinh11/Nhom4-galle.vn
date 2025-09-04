import { Col, Container, Row } from "react-bootstrap";
import "./Watch.css";

function Service() {
  return (
    <Container className="service mt-4">
      <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center">In Khắc Đồng Hồ</h2>
            <b className="fst-italic">
                In khắc lên đồng hồ là dịch vụ được yêu thích hàng đầu.Bằng phương pháp này,người chơi đồng hồ 
                có thể khắc lên bất cứ thứ gì mình thích,đó có thể là tên, ngày tháng kỷ niệm, logo,…
            </b>
            <p>
                Công nghệ khắc laser có độ chính xác cực cao, đường nét tinh xảo, thời gian khắc siêu tốc,
                có thể lấy ngay trong ngày. Bên cạnh đó, năng lượng tia laser cũng có thể điều chỉnh độ khắc
                nông sâu, đáp ứng mọi nhu cầu của khách hàng.
            </p>
             <p>
                Nếu bạn không muốn chi quá nhiều tiền cho các mẫu đồng hồ phiên bản giới hạn độc đáo
                thì việc điều khắc lên vỏ đồng hồ chính là giải pháp hợp lý và tiết kiệm. Hơn nữa,
                việc khắc tên, chữ hoặc bất kỳ một họa tiết, hoa văn biểu tượng nào lên đồng hồ
                còn thể hiện được gu thẩm mỹ và phong cách riêng của mỗi người.
            </p>
            <div className="text-center mt-3"><img src="/img/engraving.png" alt="img" className="img-fluid" /></div>
            <p>
                Thấu hiểu được điều đó, hiện nay Đồng hồ Galle đang áp dụng chương trình khắc laser miễn phí cho khách hàng
                tới mua sắm tại các gian hàng trên toàn quốc. Cụ thể:
            </p>
            <p><b>1. Đối tượng áp dụng:</b></p>
            <p>
                Khách hàng mua hàng tại hệ thống Đồng hồ Galle tại các tỉnh thành khu vực miền Bắc, Trung: 
                Khắc laser miễn phí trên bút và các sản phẩm đồng hồ đeo tay có giá trị thanh toán dưới 10 triệu đồng.
            </p>
            <p><b>2. Thời gian áp dụng:</b></p>
            <p>Từ ngày 01/01/2023 đến khi có thông báo mới.</p>
            <p><b>4. Lưu ý:</b></p>
            <p>
                Đối với các sản phẩm đồng hồ đeo tay có cấu trúc hoặc màu mạ đặc biệt có thể gặp một số rủi ro khi khắc laser như: 
                không thể làm mới lại phần đã khắc laser, phần khắc laser có thể bị xém nhẹ ở viền khắc, màu khắc sẽ không sáng 
                như khi khắc laser lên thép không gỉ,…
            </p>
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

export default Service;