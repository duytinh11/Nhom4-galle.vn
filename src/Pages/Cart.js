import React, { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../css/cart.css';

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const cartRef = useRef();

  // Tính tổng giá tiền
  const totalPrice = cartItems.reduce((sum, item) => {
    const priceNumber = Number(item.price.replace(/[^\d]/g, ''));
    return sum + priceNumber * item.quantity;
  }, 0);

  // Đóng giỏ hàng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <>
      <div className="cart-overlay" />
      <div className="cart-container open" ref={cartRef}>
        <div className="cart-header">
          Giỏ hàng, <span style={{ color: '#aaa', fontWeight: 'normal', fontSize: 16 }}>{cartItems.length} sản phẩm</span>
          <button className="cart-close" title="Đóng" onClick={onClose}>×</button>
        </div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div>Giỏ hàng trống.</div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-qty-group">
                    Số lượng:
                    <button className="cart-qty-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="cart-qty-value">{item.quantity}</span>
                    <button className="cart-qty-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <div className="cart-item-price">Giá&nbsp;{item.price}</div>
                </div>
                <button className="cart-item-remove" title="Xóa" onClick={() => removeFromCart(item.id)}>🗑</button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total-row">
            <span>Tổng tiền hàng</span>
            <span>{totalPrice.toLocaleString()}₫</span>
          </div>
          <div className="cart-actions">
            <button className="cart-buy-btn">Mua ngay</button>
            <button className="cart-continue-btn" onClick={onClose}>
              Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;