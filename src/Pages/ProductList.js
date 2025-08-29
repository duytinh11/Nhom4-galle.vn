import React, { useState, useEffect } from 'react';

// Dummy data (bạn thay bằng API thật nếu có)
const productsData = [
    {
        id: 1,
        name: 'Đồng hồ Casio MTP-V002GL-7B3UDF',
        price: 850000,
        image: 'https://galle.vn/media/product/250-mtp-v002gl-7b3udf.jpg',
        brand: 'Casio',
        gender: 'Nam',
        strap: 'Dây da',
        origin: 'Nhật Bản'
    },
    {
        id: 2,
        name: 'Đồng hồ Orient RA-AA0B01G19B',
        price: 4500000,
        image: 'https://galle.vn/media/product/250-ra-aa0b01g19b.jpg',
        brand: 'Orient',
        gender: 'Nam',
        strap: 'Dây kim loại',
        origin: 'Nhật Bản'
    },
    // ...thêm nhiều sản phẩm khác
];

const brands = ['Tất cả', 'Casio', 'Orient'];
const genders = ['Tất cả', 'Nam', 'Nữ'];
const straps = ['Tất cả', 'Dây da', 'Dây kim loại'];
const origins = ['Tất cả', 'Nhật Bản', 'Thụy Sĩ'];

const ProductList = () => {
    const [products, setProducts] = useState(productsData);
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('Tất cả');
    const [gender, setGender] = useState('Tất cả');
    const [strap, setStrap] = useState('Tất cả');
    const [origin, setOrigin] = useState('Tất cả');
    const [sort, setSort] = useState('default');

    useEffect(() => {
        let filtered = productsData.filter(p => 
            (brand === 'Tất cả' || p.brand === brand) &&
            (gender === 'Tất cả' || p.gender === gender) &&
            (strap === 'Tất cả' || p.strap === strap) &&
            (origin === 'Tất cả' || p.origin === origin) &&
            (p.name.toLowerCase().includes(search.toLowerCase()))
        );
        if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
        setProducts(filtered);
    }, [search, brand, gender, strap, origin, sort]);

    return (
        <div className="product-page" style={{ padding: 24 }}>
            <h2>Đồng hồ chính hãng</h2>
            <div className="filters" style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ padding: 8, minWidth: 200 }}
                />
                <select value={brand} onChange={e => setBrand(e.target.value)}>
                    {brands.map(b => <option key={b}>{b}</option>)}
                </select>
                <select value={gender} onChange={e => setGender(e.target.value)}>
                    {genders.map(g => <option key={g}>{g}</option>)}
                </select>
                <select value={strap} onChange={e => setStrap(e.target.value)}>
                    {straps.map(s => <option key={s}>{s}</option>)}
                </select>
                <select value={origin} onChange={e => setOrigin(e.target.value)}>
                    {origins.map(o => <option key={o}>{o}</option>)}
                </select>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="default">Sắp xếp</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                </select>
            </div>
            <div className="product-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
                {products.length === 0 && <div>Không tìm thấy sản phẩm phù hợp.</div>}
                {products.map(product => (
                    <div key={product.id} className="product-card" style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: 180, objectFit: 'contain' }} />
                        <h4 style={{ margin: '12px 0 8px' }}>{product.name}</h4>
                        <div style={{ color: '#c00', fontWeight: 'bold', marginBottom: 8 }}>{product.price.toLocaleString()}₫</div>
                        <div style={{ fontSize: 13, color: '#555', marginBottom: 8 }}>
                            <span>Thương hiệu: {product.brand}</span><br />
                            <span>Giới tính: {product.gender}</span><br />
                            <span>Dây: {product.strap}</span><br />
                            <span>Xuất xứ: {product.origin}</span>
                        </div>
                        <button style={{ background: '#c00', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;