import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ isAuthenticated }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Получаем текущий путь

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setMenuOpen(false);
        }
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest("nav") && !e.target.closest(".burger")) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const isActive = (path) => location.pathname === path; // Проверяем, совпадает ли путь

    return (
        <header className="bg-white border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
                {/* Бургер-меню для мобильных */}
                <div
                    className="burger text-2xl cursor-pointer md:hidden"
                    onClick={toggleMenu}
                >
                    ☰
                </div>

                {/* Логотип */}
                <div className="hidden md:flex items-center gap-2">
                    <div>
                        <Link to="/" className="text-lg font-bold text-gray-800">
                            БИБЛИОТЕЧНАЯ
                        </Link>
                        <div className="text-sm font-semibold text-gray-600">
                            книжный магазин
                        </div>
                    </div>
                </div>

                {/* Навигация */}
                <nav
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } absolute top-full left-0 z-10 w-full bg-white shadow-lg md:static md:flex md:w-auto md:items-center md:space-x-6`}
                >
                    <Link
                        to="/"
                        className={`block p-2 ${
                            isActive("/") ? "underline text-gray-800 font-bold" : "text-gray-700"
                        } hover:text-gray-900 transition`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Главная
                    </Link>
                    <Link
                        to="/books"
                        className={`block p-2 ${
                            isActive("/books") ? "underline text-gray-800 font-bold" : "text-gray-700"
                        } hover:text-gray-900 transition`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Книги
                    </Link>
                    <Link
                        to="/wishlist"
                        className={`block p-2 ${
                            isActive("/wishlist") ? "underline text-gray-800 font-bold" : "text-gray-700"
                        } hover:text-gray-900 transition`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Избранное
                    </Link>
                    <Link
                        to="/cart"
                        className={`block p-2 ${
                            isActive("/cart") ? "underline text-gray-800 font-bold" : "text-gray-700"
                        } hover:text-gray-900 transition`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Корзина
                    </Link>
                    <Link
                        to="/order"
                        className={`block p-2 ${
                            isActive("/order") ? "underline text-gray-800 font-bold" : "text-gray-700"
                        } hover:text-gray-900 transition`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Мои заказы
                    </Link>
                </nav>

                {/* Аутентификация */}
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Link
                                to="/profile"
                                className={`${
                                    isActive("/profile") ? "underline text-gray-800 font-bold" : "text-gray-700"
                                } hover:text-gray-900 transition`}
                            >
                                Профиль
                            </Link>
                            <button
                                onClick={() => console.log("Logout")}
                                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
                            >
                                Выйти
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className={`${
                                    isActive("/login") ? "underline text-blue-500 font-bold" : "text-gray-700"
                                } hover:text-gray-900 transition`}
                            >
                                Войти
                            </Link>
                            <Link
                                to="/register"
                                className={`${
                                    isActive("/register") ? "underline text-gray-500 font-bold" : "text-gray-700"
                                } hover:text-gray-900 transition`}
                            >
                                Регистрация
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
