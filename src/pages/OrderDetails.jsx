import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      orderNumber: "123456",
      date: "2023-12-11",
      status: "Выполнен",
      total: 1500,
      details: {
        books: [
          { title: "1984", author: "Джордж Оруэлл", price: 300, image: "path-to-image-1.jpg" },
          { title: "Гарри Поттер", author: "Дж. Роулинг", price: 350, image: "path-to-image-2.jpg" },
        ],
        address: "ул. Пушкина, дом 10, кв. 5",
        total: 1500,
      },
    },
    {
      id: 2,
      orderNumber: "654321",
      date: "2023-12-10",
      status: "Обрабатывается",
      total: 1000,
      details: {
        books: [
          { title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },
          { title: "Шерлок Холмс", author: "А. Конан Дойл", price: 600, image: "path-to-image-4.jpg" },
        ],
        address: "ул. Лермонтова, дом 20, кв. 15",
        total: 1000,
      },
    },
  ];

  const order = orders.find((o) => o.id === parseInt(orderId));

  if (!order) {
    return <div className="text-center text-red-500">Заказ не найден</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
      >
        Назад
      </button>

      <h1 className="text-2xl font-bold mb-6">Детали заказа #{order.orderNumber}</h1>
      <hr className="mb-6" />

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Список книг</h2>
        <ul className="space-y-4">
          {order.details.books.map((book, index) => (
            <li key={index} className="flex items-center gap-4">
              <img src={book.image} alt={book.title} className="w-20 h-28 object-cover border rounded" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{book.title}</span>
                <span className="text-sm text-gray-600">Автор: {book.author}</span>
                <span className="text-md text-gray-800">Цена: {book.price} грн</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Адрес доставки</h2>
        <p className="text-gray-700">{order.details.address}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Итоговая сумма</h2>
        <p className="text-gray-800 font-semibold">{order.details.total} грн</p>
      </div>
    </div>
  );
}

export default OrderDetails;