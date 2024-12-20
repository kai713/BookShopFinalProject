import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // Импортируем action для добавления в корзину
import books from "../assets/books.svg";

function BookCard({ book }) {
  const dispatch = useDispatch(); // Инициализируем dispatch для вызова действий Redux

  return (
    <div className="border rounded-lg overflow-hidden bg-white p-4 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Изображение книги */}
      <img
        src={books}
        alt={book.title}
        className="w-full h-64 object-cover mb-4"
      />

      {/* Цена книги */}
      <div className="text-lg font-bold text-blue-600 mb-2">
        {book.price} грн.
      </div>

      {/* Название книги */}
      <div className="text-base font-semibold mb-2">{book.title}</div>

      {/* Автор книги */}
      <div className="text-sm text-gray-600 mb-4">{book.author}</div>

      {/* Кнопка добавления в корзину */}
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 transition-colors duration-300 hover:bg-blue-400"
          onClick={() => dispatch(addToCart({ book, quantity: 1 }))} // Добавляем книгу в корзину
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

export default BookCard;
