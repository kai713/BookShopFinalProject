import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="w-full bg-gray-800 text-white p-4 flex justify-between">
            <div>
                <Link to="/">Магазин Книг</Link>
            </div>
            <nav className="flex space-x-4">
                <Link to="/books">Каталог</Link>
                <Link to="/cart">Корзина ({cartCount})</Link>
            </nav>
        </header>
    )
}

export default Header;
