import React from "react";
import books from "../assets/books.svg";

function BookCard({ book }) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white p-4 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={books}
        alt={book.title}
        className="w-full h-64 object-cover mb-4"
      />
      <div className="text-lg font-bold text-blue-600 mb-2">
        {book.price} грн.
      </div>
      <div className="text-base font-semibold mb-2">{book.title}</div>
      <div className="text-sm text-gray-600 mb-4">{book.author}</div>
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white rounded px-4 py-2 transition-colors duration-300 hover:bg-blue-400">
          В корзину
        </button>
        <button className="text-red-500 text-xl">
          ❤️
        </button>
      </div>
    </div>
  );
}

export default BookCard;
