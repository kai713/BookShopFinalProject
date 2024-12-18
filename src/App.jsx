import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BooksPage from './pages/BooksPage';
import CartPage from './pages/CartPage';
import BookDetailPage from './pages/BookDetailPage';

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
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
