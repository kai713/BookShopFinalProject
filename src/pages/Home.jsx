import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList.jsx";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/WishlistSlice.js";
import home_logo from "../assets/home_logo.svg";

function Home() {
  const dispatch = useDispatch();

  const handleAddToWishlist = (book) => {
    dispatch(addToWishlist(book));
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("Все");

  const [books, setBooks] = useState([]); // Горячие поступления
  const [saleBooks, setSaleBooks] = useState([]); // Распродажа

  const booksPerPage = 5;

  // Получение данных о книгах из API
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books"); // Замените на ваш API endpoint
      const data = await response.json();

      // Разделение книг на горячие поступления и распродажу
      setBooks(data.hotArrivals); // Пример: данные для горячих поступлений
      setSaleBooks(
        data.saleBooks.map((book) => ({
          ...book,
          originalPrice: Math.round(book.price * 1.2), // Добавляем старую цену (20% выше реальной)
        }))
      );
    };

    fetchBooks();
  }, []);

  const filteredBooks =
    selectedGenre === "Все"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    currentPage * booksPerPage,
    currentPage * booksPerPage + booksPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left p-8 bg-gray-100">
        {/* Левый блок с текстом */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Книги от А до Я
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            В нашем магазине можно найти книги на любой вкус. Большой
            ассортимент, приятные цены, интересные сюжеты.
          </p>
          <Link
            to="/books"
            className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-400"
          >
            Перейти в каталог
          </Link>
        </div>

        {/* Правый блок с изображением */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <div className="relative">
            <img
              src={home_logo}
              alt="Книги"
              className="w-full max-w-md lg:max-w-xl rounded-lg shadow-md"
            />
            <div
  className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-lg sm:bottom-2 sm:left-1 sm:p-3 md:bottom-1 md:left-1 md:p-1 lg:bottom-4 lg:left-4 lg:p-4"
>
<p className="text-sm text-gray-600 sm:text-xs md:text-sm lg:text-base overflow-hidden whitespace-nowrap border-r-2 border-gray-500 animate-typing">
      BestSellers 2024
    </p>
</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-2">
        <h2 className="text-2xl font-bold text-gray-800">Горячие поступления</h2>
        <BookList books={paginatedBooks} />
      </section>

      <section className="max-w-7xl mx-auto p-2">
        <h2 className="text-2xl font-bold text-gray-800">Распродажа</h2>
        <BookList books={paginatedBooks} />
      </section>

      
    </div>
  );
}

export default Home;
