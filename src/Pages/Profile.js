import { Col, Container, Row } from "react-bootstrap";
import "./Watch.css";

function Profile() {
  return (
    <Container className="service mt-4">
        <Row className="mb-4">
            <Col>
                <h2 className="fw-bold text-center mt-3">Giới thiệu Đồng hồ Galle</h2>
                <p>
                    Khởi đầu với một cửa hàng nằm trên phố Tuệ Tĩnh, Hà Nội, Đồng hồ Galle trải qua hơn 20 năm vượt 
                    qua nhiều thách thức gian nan và gặt hái thành tựu, để có thể tự hào khẳng định vị thế Hệ thống bán 
                    lẻ đồng hồ chính hãng hàng đầu Việt Nam.<br/>
                    Với mong muốn mang lại cho khách hàng những sản phẩm chính hãng cùng dịch vụ đạt tiêu chuẩn châu Âu, 
                    Đồng hồ Galle đang ngày càng nỗ lực để hoàn thiện và nâng cao chất lượng dịch vụ của mình.
                </p>
                <div className="text-center mt-3"><img src="/img/pro1.jpg" alt="img" className="img-fluid" /></div>
                <p>
                    Trong những năm đầu gian khó, để khẳng định được thương hiệu trước sự cạnh tranh của những cửa hàng 
                    đồng hồ có lịch sử lâu đời ở Hà Nội, Đồng hồ Galle đã xác định rõ và kiên định trong chiến lược sản 
                    phẩm của mình là hàng chính hãng, chất lượng cao, phân khúc giá rộng, đa dạng mẫu mã và kiểu dáng, 
                    nhằm đáp ứng nhu cầu của nhiều đối tượng khách hàng. Những thương hiệu đầu tiên được Đồng hồ Galle 
                    lựa chọn phân phối có thể kể đến như Candino và Roamer đến từ Thụy Sỹ, Orient đến từ Nhật Bản và dòng đồng 
                    hồ thời trang Romanson đến từ Hàn Quốc.
                </p>
                <div className="text-center mt-3"><img src="/img/pro2.jpg" alt="img" className="img-fluid" /></div>
                <p>
                    Bên cạnh chiến lược mở rộng về thương hiệu và phổ giá, Đồng hồ Galle cũng không ngừng mở rộng hệ thống 
                    chuỗi các cửa hàng của mình. Đến nay, Đồng hồ Galle đã có hơn 20 cửa hàng trên toàn quốc, chủ yếu ở các 
                    thành phố lớn như Hà Nội, Hải Dương, Hải Phòng, Đà Nẵng, Tp. Hồ Chí Minh và Biên Hòa.<br/> 
                    Song hành với việc phát triển các showroom ở những tuyến phố lớn thì các cửa hàng nằm tại các trung tâm 
                    thương mại lớn như BigC, Vincom, Lotte và Aeon cũng là những lựa chọn ưu tiên của Đồng hồ Galle.
                </p>
                <p>
                    “Chất & Nhất” - slogan của Đồng hồ Galle cũng chính là điều mà hơn 300 con người đang làm việc tại đây hướng 
                    tới. Chúng tôi đang nỗ lực cố gắng không ngừng để khách hàng có thể thấy và cảm nhận được điều đó trong một 
                    ngày không xa.
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

export default Profile;