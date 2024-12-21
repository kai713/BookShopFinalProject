import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MyOrders from './pages/MyOrders'; // Путь к файлу MyOrders.jsx

import MainPage from './pages/Home';
import BooksPage from './pages/BooksPage';
import CartPage from './pages/CartPage';
import OrderDetails from './pages/OrderDetails';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WishlistPage from './pages/WishlistPage';
const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/books" element={<BooksPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/order" element={<MyOrders/>}/>
                    <Route path="/order/:orderId" element={<OrderDetails/>}/>
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="*" element={<div>Страница не найдена</div>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
