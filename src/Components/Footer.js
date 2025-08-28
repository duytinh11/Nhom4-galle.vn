import React, { useState } from 'react';
import '../css/style.css';

const tabList = [
    { id: 'tab-all', label: 'TẤT CẢ SHOWROOM' },
    { id: 'tab-bao-hanh', label: 'TRUNG TÂM BẢO HÀNH' },
    { id: 'tab-hanoi', label: 'HÀ NỘI' },
    { id: 'tab-bacninh', label: 'BẮC NINH' },
    { id: 'tab-haiduong', label: 'HẢI DƯƠNG' },
    { id: 'tab-haiphong', label: 'HẢI PHÒNG' },
    { id: 'tab-danang', label: 'ĐÀ NẴNG' },
    { id: 'tab-dongnai', label: 'ĐỒNG NAI' },
    { id: 'tab-hcm', label: 'HỒ CHÍ MINH' },
];

const Footer = () => {
    const [activeTab, setActiveTab] = useState('tab-all');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'tab-all':
                return (
                    <>
                        <div className="store-card">
                            <h4>ĐHTS 146 Nguyễn Khánh Toàn</h4>
                            <p>Số 146 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội</p>
                            <p>024 7101 0666</p>
                            <p>8:30 - 21:00</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Aeon Long Biên</h4>
                            <p>Tầng 2 Aeon Mall Long Biên, Hà Nội</p>
                            <p>024 6666 4060</p>
                            <p>9:30 - 22:00</p>
                        </div>
                        <div className="store-card">
                            <h4>GW TP. Bắc Ninh</h4>
                            <p>85 Nguyễn Gia Thiều, Bắc Ninh</p>
                            <p>0222 383 9999</p>
                            <p>8:00 - 20:30</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Hải Dương</h4>
                            <p>11 Phạm Ngũ Lão, TP. Hải Dương</p>
                            <p>0220 389 6868</p>
                            <p>9:00 - 21:00</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Lê Thánh Tông</h4>
                            <p>112 Lê Thánh Tông, Ngô Quyền, Hải Phòng</p>
                            <p>0225 353 8888</p>
                            <p>8:30 - 20:30</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Vincom Đà Nẵng</h4>
                            <p>Tầng 1 Vincom, 910A Ngô Quyền, Sơn Trà</p>
                            <p>0236 7100 686</p>
                            <p>9:00 - 22:00</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Biên Hòa</h4>
                            <p>Địa chỉ: Tầng 1, Vincom Biên Hòa, 1096 Phạm Văn Thuận, TP. Biên Hòa</p>
                            <p>Điện thoại: 0251 3888 888</p>
                            <p>Giờ mở cửa: 9:00 - 21:30</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Quận 3</h4>
                            <p>Địa chỉ: 393 Điện Biên Phủ, P.4, Quận 3, TP. Hồ Chí Minh</p>
                            <p>Điện thoại: 028 7100 6868</p>
                            <p>Giờ mở cửa: 8:30 - 20:30</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Landmark 81</h4>
                            <p>Địa chỉ: Tầng B1, Vincom Landmark 81, Bình Thạnh, TP. Hồ Chí Minh</p>
                            <p>Điện thoại: 028 6677 7788</p>
                            <p>Giờ mở cửa: 9:30 - 22:00</p>
                        </div>
                    </>
                );
            case 'tab-bao-hanh':
                return (
                    <div className="store-card">
                        <h4>Trung tâm Bảo hành Galle</h4>
                        <p>54 Hàng Bài, Hoàn Kiếm, Hà Nội</p>
                        <p>024 7100 1234</p>
                        <p>Thứ 2 - Thứ 7: 8:30 - 17:30</p>
                    </div>
                );
            case 'tab-hanoi':
                return (
                    <>
                        <div className="store-card">
                            <h4>ĐHTS 146 Nguyễn Khánh Toàn</h4>
                            <p>Số 146 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội</p>
                            <p>024 7101 0666</p>
                            <p>8:30 - 21:00</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Aeon Long Biên</h4>
                            <p>Tầng 2 Aeon Mall Long Biên, Hà Nội</p>
                            <p>024 6666 4060</p>
                            <p>9:30 - 22:00</p>
                        </div>
                    </>
                );
            case 'tab-bacninh':
                return (
                    <div className="store-card">
                        <h4>GW TP. Bắc Ninh</h4>
                        <p>85 Nguyễn Gia Thiều, Bắc Ninh</p>
                        <p>0222 383 9999</p>
                        <p>8:00 - 20:30</p>
                    </div>
                );
            case 'tab-haiduong':
                return (
                    <div className="store-card">
                        <h4>GW Hải Dương</h4>
                        <p>11 Phạm Ngũ Lão, TP. Hải Dương</p>
                        <p>0220 389 6868</p>
                        <p>9:00 - 21:00</p>
                    </div>
                );
            case 'tab-haiphong':
                return (
                    <div className="store-card">
                        <h4>GW Lê Thánh Tông</h4>
                        <p>112 Lê Thánh Tông, Ngô Quyền, Hải Phòng</p>
                        <p>0225 353 8888</p>
                        <p>8:30 - 20:30</p>
                    </div>
                );
            case 'tab-danang':
                return (
                    <div className="store-card">
                        <h4>GW Vincom Đà Nẵng</h4>
                        <p>Tầng 1 Vincom, 910A Ngô Quyền, Sơn Trà</p>
                        <p>0236 7100 686</p>
                        <p>9:00 - 22:00</p>
                    </div>
                );
            case 'tab-dongnai':
                return (
                    <div className="store-card">
                        <h4>GW Biên Hòa</h4>
                        <p>Địa chỉ: Tầng 1, Vincom Biên Hòa, 1096 Phạm Văn Thuận, TP. Biên Hòa</p>
                        <p>Điện thoại: 0251 3888 888</p>
                        <p>Giờ mở cửa: 9:00 - 21:30</p>
                    </div>
                );
            case 'tab-hcm':
                return (
                    <>
                        <div className="store-card">
                            <h4>GW Quận 3</h4>
                            <p>Địa chỉ: 393 Điện Biên Phủ, P.4, Quận 3, TP. Hồ Chí Minh</p>
                            <p>Điện thoại: 028 7100 6868</p>
                            <p>Giờ mở cửa: 8:30 - 20:30</p>
                        </div>
                        <div className="store-card">
                            <h4>GW Landmark 81</h4>
                            <p>Địa chỉ: Tầng B1, Vincom Landmark 81, Bình Thạnh, TP. Hồ Chí Minh</p>
                            <p>Điện thoại: 028 6677 7788</p>
                            <p>Giờ mở cửa: 9:30 - 22:00</p>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <footer className="footer">
            {/* ...existing code... */}
            <div className="footer-selection">
                <div className="btn-group">
                    {tabList.map(tab => (
                        <button
                            key={tab.id}
                            className={activeTab === tab.id ? 'active' : ''}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="info-tabs">
                    <div className="tab-content active">
                        {renderTabContent()}
                    </div>
                </div>
                <div className="copyright">
                    © All rights reserved - Bản quyền thuộc về Công ty TNHH Một mình tao làm footer
                </div>
            </div>
        </footer>
    );
};

export default Footer;
// ...existing code...