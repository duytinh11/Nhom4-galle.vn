import { Col, Container, Row } from "react-bootstrap";
import "./Watch.css";

function Warranty() {
  return (
    <Container className="service mt-4">
      <Row className="mb-4">
          <Col>
            <h2 className="title fw-bold text-center">Chính sách bảo hành</h2>
            <h4 className="subtitle">Chính sách bảo hành</h4>
            <h5 className="fw-bold mt-4">1. Chính sách bảo hành</h5>
            <ul>
                <li>
                    Đồng hồ được bảo hành từ 1 đến 3 năm kể từ ngày mua theo quy định của từng hãng sản xuất 
                    (tùy từng hãng sẽ có thời gian bảo hành khác nhau).
                </li>
                <li>
                    Riêng khách hàng mua đồng hồ tại hệ thống Đồng hồ Galle sẽ được hưởng thêm quyền lợi thay 
                    pin miễn phí trọn đời (trừ các sản phẩm sử dụng pin đặc biệt như Kinetic, Smart Watch… hay pin năng lượng mặt trời)
                </li>
            </ul>
            <h5 className="fw-bold mt-4">2. Phạm vi tiếp nhận đồng hồ bảo hành và sửa chữa</h5>
            <ul>
                <li>
                    Trung tâm bảo hành và Trạm bảo hành Galle Care tiếp nhận bảo hành và sửa chữa đối với tất cả các khách hàng 
                    (bao gồm cả đồng hồ được mua và không được mua tại Đồng hồ Galle)
                </li>
                <li>
                    Đồng hồ Galle tiếp nhận bào hành và sửa chữa đối với các sản phẩm mua tại hệ thống đồng hồ Đồng hồ Galle và donghothuysy.vn.
                </li>
            </ul>
            <h5 className="fw-bold mt-4">3. Điều kiện để đồng hồ được bảo hành miễn phí và cách tính phí đối với đồng hồ sửa chữa</h5>
            <ul>
                <b>Đối với đồng hồ còn trong thời gian bảo hành:</b>
                <p>
                    Khách hàng phải xuất trình được những giấy tờ liên quan đến sản phẩm như sổ bảo hành hoặc cung cấp thông tin mua hàng, 
                    hóa đơn mua hàng…, khách hàng sẽ được bảo hành miễn phí theo như quy định của hãng sản xuất.
                </p>
                <p><i>Lưu ý:</i></p>
                <li>
                    Chỉ áp dụng đối với các thương hiệu Chronoswiss, Perrelet, Century, Frederique Constant, Alpina, Ernest Borel, Roamer, 
                    Candino, Orient, Romanson, Festina, Bering, Francis Delon.
                </li>
                <li>
                    Chỉ chấp nhận bảo hành với các sản phẩm mua hàng tại cửa hàng chính thức của hãng hoặc của nhà phân phối thương hiệu đó 
                    và có thông tin trên website của hãng.
                </li>
                <br/>
                <b>Đối với đồng hồ đã hết thời gian bảo hành:</b>
                <p>
                    Khách hàng sẽ mất phí sửa chữa. Mức phí sửa chữa sẽ được thông báo tới khách hàng sau khi Kỹ thuật viên kiểm tra tình 
                    trạng hư hỏng của sản phẩm. Khách hàng hội viên của Đồng hồ Galle sẽ được giảm phí sửa chữa.
                </p>
            </ul>
            <h5 className="fw-bold mt-4">4. Các trường hợp không nằm trong phạm vi bảo hành</h5>
            <ul>
                <li>Các lỗi liên quan đến vỏ và dây của đồng hồ như vỏ bong tróc, ố mặt số hay dây bị gãy, nứt hoặc bong…</li>
                <li>Các lỗi rơi vỡ, va đập, móp cấn, làm xước kính trong quá trình Khách hàng sử dụng gây ra.</li>
                <li>Không bảo hành cho trường hợp lỗi do người dùng như điều chỉnh, sử dụng, bảo quản không đúng cách.</li>
                <li>Không bảo hành cho đồng hồ đã được sửa chữa qua những nơi không phải là trung tâm bảo hành của Đồng hồ Galle.</li>
            </ul>
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

export default Warranty;