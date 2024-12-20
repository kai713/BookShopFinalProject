import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Header({isAuthenticated}) {
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <header className="bg-gray-200 border-b">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
                {/* Burger Icon */}
                <div
                    className="burger text-2xl cursor-pointer md:hidden"
                    onClick={toggleMenu}
                >
                    ☰
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2">

                    <div>
                        <Link to="/" className="text-lg font-bold text-gray-800">
                            БИБЛИОТЕЧНАЯ
                        </Link>
                        <div className="text-sm font-semibold text-gray-600">
                            книжный магазин
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } absolute top-full left-0 z-10 w-full bg-white shadow-md md:static md:flex md:w-auto md:items-center md:space-x-6`}
                >
                    <Link
                        to="/"
                        className="block p-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setMenuOpen(false)}
                    >
                        Main
                    </Link>
                    <Link
                        to="/books"
                        className="block p-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setMenuOpen(false)}
                    >
                        Books
                    </Link>
                    <Link
                        to="/wishlist"
                        className="block p-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setMenuOpen(false)}
                    >
                        WishList
                    </Link>
                    <Link
                        to="/cart"
                        className="block p-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setMenuOpen(false)}
                    >
                        Корзина
                    </Link>
                    <Link
                        to="/order"
                        className="block p-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setMenuOpen(false)}
                    >
                        My Orders
                    </Link>
                </nav>

                {/* Authentication */}
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Link to="/profile" className="text-gray-700 hover:text-gray-900">
                                Профиль
                            </Link>
                            <button
                                onClick={() => console.log("Logout")}
                                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                            >
                                Выйти
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-700 hover:text-gray-900">
                                Login
                            </Link>
                            <Link to="/register" className="text-gray-700 hover:text-gray-900">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
