import React from "react";
import BookCard from "./BookCard";

const BooksList = () => {
  // Массив книг
  const books = [
    {
      id: 1,
      title: "1984",
      author: "Джордж Оруэлл",
      price: 500,
      discount: 50,
      stockQuantity: 10,
      image: "/assets/image1.jpg", // Можно заменить на путь к реальному изображению
    },
    {
      id: 2,
      title: "Гарри Поттер",
      author: "Дж. К. Роулинг",
      price: 700,
      discount: 0,
      stockQuantity: 0, // Нет в наличии
      image: "/assets/image2.jpg",
    },
    {
      id: 3,
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      price: 400,
      discount: 100,
      stockQuantity: 5,
      image: "/assets/image3.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
