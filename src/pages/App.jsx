import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '/Header';
import Footer from '/Footer';
import BooksPage from '/BooksPage';
import CartPage from '/CartPage';
import OrderDetails from '/OrderDetails';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<BooksPage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/books/:id" element={<BookDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/order/:orderId" element={<OrderDetails />} /> {/* Новый маршрут */}

                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;