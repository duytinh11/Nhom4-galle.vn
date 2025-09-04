import { Col, Container, Row } from "react-bootstrap";
import "./Watch.css";

function Return() {
  return (
    <Container className="service mt-4">
      <Row className="mb-4">
          <Col>
            <h2 className="title fw-bold text-center">Chính sách đổi trả</h2>
            <h4 className="subtitle">Chính sách đổi trả</h4>
            <h5 className="fw-bold mt-4">1. Chính sách đổi mới theo nhu cầu khách hàng</h5>
            <p>
                Trong vòng 5 ngày kể từ thời điểm mua hàng, khách hàng được đổi sản phẩm 01 lần, có giá trị bằng hoặc cao hơn sản phẩm đã mua tại hệ thống Đồng hồ Galle với các điều kiện sau:
            </p>
            <ul>
                <li>Chỉ áp dụng trong trường hợp Khách hàng mua làm quà tặng đã xác nhận thông tin với nhân viên để lưu thông tin trên phiếu bán hàng.</li>
                <li>Đồng hồ chưa qua sử dụng, còn lớp ni lông bên ngoài.</li>
                <li>Không có dấu hiệu tháo mở đáy đồng hồ, không trầy xước dù là nhỏ nhất.</li>
                <li>Dây da chưa sử dụng, không có dấu hiệu ngắn dây.</li>
                <li>Phụ kiện đi kèm (hộp, túi) và quà tặng kèm theo (nếu có) phải đầy đủ, chưa qua sử dụng.</li>
                <li>Khách hàng sẽ nhận sổ bảo hành sau khi thông báo với nhân viên xác nhận không đổi đồng hồ.</li>
            </ul>
            <p><i>* Lưu ý:</i></p>

            <ul>
                <li>Không áp dụng hoàn tiền.</li>
                <li>Không áp dụng với các sản phẩm ưu đãi từ 30% trở lên.</li>
                <li>Áp dụng cho Khách hàng đang là Hội viên (Friendly, Gold, Diamond, Platinum) của hệ thống đồng hồ Galle.</li>
            </ul>  
            <div className="text-center mt-3"><img src="/img/return1.jpg" alt="img" className="img-fluid" /></div> 
            <h5 className="fw-bold mt-4">2. Chính sách đổi sản phẩm theo lỗi kỹ thuật trong máy</h5>
            <p>
                Trong vòng 72 giờ kể từ thời điểm mua hàng, nếu đồng hồ gặp các lỗi kỹ thuật trong máy như sau:
            </p>
            <ul>
                <li>Đồng hồ không chạy hoặc chạy không chính xác (với đồng hồ cơ, chạy nhanh chậm vượt quá mức quy định cho phép của từng thương hiệu).</li>
                <li>Hơi nước trên mặt đồng hồ.</li>
                <li>Các lỗi bên trong mặt số.</li>
                <li>Các lỗi kỹ thuật khác bắt nguồn từ bên trong máy đồng hồ.</li>
            </ul>
            <p><i>* Lưu ý:</i></p>
            <ul>
                <li>Sản phẩm lỗi chỉ được đổi sau khi đã có xác nhận của kỹ thuật viên trung tâm/trạm bảo hành & sửa chữa <a href="/repair"><b><font color="blue">Galle Care</font></b></a>.</li>
                <li>Không áp dụng cho các trường hợp đồng hồ có dấu hiệu bị rơi: móp, cấn sâu vỏ đồng hồ hay nút vỡ kính.</li>
            </ul>
          </Col>
      </Row>
    </Container>
  );
}

export default Return;