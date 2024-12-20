import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MyOrders from './pages/MyOrders'; // Путь к файлу MyOrders.jsx

import MainPage from './pages/Home';
import BooksPage from './pages/BooksPage';
import CartPage from './pages/CartPage';
import BookDetailPage from './pages/BookDetailPage';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
            <Routes>

    <Route path="/" element={<MainPage />} />
    <Route path="/books" element={<BooksPage />} />
    <Route path="/books/:id" element={<BookDetailPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/orders" element={<MyOrders />} /> {/* Маршрут для MyOrders */}
</Routes>

            </div>
            <Footer/>
        </div>
    );
};

export default App;
