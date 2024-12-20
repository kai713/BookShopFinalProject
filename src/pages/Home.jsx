import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList.jsx";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/WishlistSlice.js";


function Home() {
  const dispatch = useDispatch();

  const handleAddToWishlist = (book) => {
    dispatch(addToWishlist(book));
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("Все");

  const genres = ["Все", "Фантастика", "Саморазвитие", "Детективы", "Детские", "Романы", "Другие"];

  const books = [
  ];

  const saleBooks = [
  ];

  const booksPerPage = 5;
  const filteredBooks = selectedGenre === "Все" ? books : books.filter((book) => book.genre === selectedGenre);
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

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(0);
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto flex flex-col items-center text-center p-8 bg-gray-100 border-b border-gray-300">
        <h1 className="text-4xl font-bold text-gray-800">Книги от А до Я</h1>
        <p className="text-lg my-4 text-gray-600">
          В нашем магазине можно найти книги на любой вкус. Большой ассортимент, приятные цены, интересные сюжеты.
        </p>
        <Link to="/books" className="mt-4 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-00">
          Перейти в каталог
        </Link>
      </section>

      <section className="max-w-7xl mx-auto p-8 mb-24">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Горячие поступления</h2>
          <div className="flex space-x-2 overflow-x-auto">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreChange(genre)}
                className={`px-4 py-2 bg-gray-200 rounded-md transition-colors duration-300 ${
                  selectedGenre === genre ? "bg-blue-700 text-white" : "hover:bg-blue-500 hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`p-2 text-gray-500 hover:text-gray-800 ${
              currentPage === 0 && "opacity-50 cursor-not-allowed"
            }`}
          >
            ←
          </button>
          <BookList books={paginatedBooks} />
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={`p-2 text-gray-500 hover:text-gray-800 ${
              currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed"
            }`}
          >
            →
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-8 mb-16">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Распродажа</h2>
        <BookList books={saleBooks} />
      </section>

      
    </div>
  );
}

export default Home;
