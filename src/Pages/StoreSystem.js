import React from 'react';
import '../css/style.css';

const storeList = [
  { name: 'ĐHTS 146 Nguyễn Khánh Toàn', address: 'Số 146 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội', phone: '024 7101 0666', time: '8:30 - 21:00' },
  { name: 'GW Aeon Long Biên', address: 'Tầng 2 Aeon Mall Long Biên, Hà Nội', phone: '024 6666 4060', time: '9:30 - 22:00' },
  { name: 'GW TP. Bắc Ninh', address: '85 Nguyễn Gia Thiều, Bắc Ninh', phone: '0222 383 9999', time: '8:00 - 20:30' },
  { name: 'GW Hải Dương', address: '11 Phạm Ngũ Lão, TP. Hải Dương', phone: '0220 389 6868', time: '9:00 - 21:00' },
  { name: 'GW Lê Thánh Tông', address: '112 Lê Thánh Tông, Ngô Quyền, Hải Phòng', phone: '0225 353 8888', time: '8:30 - 20:30' },
  { name: 'GW Vincom Đà Nẵng', address: 'Tầng 1 Vincom, 910A Ngô Quyền, Sơn Trà', phone: '0236 7100 686', time: '9:00 - 22:00' },
  { name: 'GW Biên Hòa', address: 'Tầng 1, Vincom Biên Hòa, 1096 Phạm Văn Thuận, TP. Biên Hòa', phone: '0251 3888 888', time: '9:00 - 21:30' },
  { name: 'GW Quận 3', address: '393 Điện Biên Phủ, P.4, Quận 3, TP. Hồ Chí Minh', phone: '028 7100 6868', time: '8:30 - 20:30' },
  { name: 'GW Landmark 81', address: 'Tầng B1, Vincom Landmark 81, Bình Thạnh, TP. Hồ Chí Minh', phone: '028 6677 7788', time: '9:30 - 22:00' },
];

const StoreSystem = () => (
  <div className="container mt-4 mb-4">
    <h2 className="fw-bold mb-4 text-center">HỆ THỐNG CỬA HÀNG</h2>
    <div className="row">
      {storeList.map((store, idx) => (
        <div className="col-md-4 mb-4" key={idx}>
          <div className="store-card p-3 shadow-sm h-100">
            <h4>{store.name}</h4>
            <p><strong>Địa chỉ:</strong> {store.address}</p>
            <p><strong>Điện thoại:</strong> {store.phone}</p>
            <p><strong>Giờ mở cửa:</strong> {store.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StoreSystem;
