import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Lấy dữ liệu từ localStorage khi khởi tạo
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    });

    // Lưu vào localStorage mỗi khi cartItems thay đổi
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Thêm sản phẩm vào giỏ, nếu đã có thì tăng số lượng
    const addToCart = (product) => {
        setCartItems(prev => {
            const found = prev.find(item => item.id === product.id);
            if (found) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // Xóa sản phẩm khỏi giỏ
    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    // Giảm số lượng sản phẩm (nếu quantity > 1)
    const decreaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Tăng số lượng sản phẩm
    const increaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            decreaseQuantity,
            increaseQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
};