import React from "react";
import { useNavigate } from "react-router-dom";

function MyOrders() {
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

  const handleOpenDetails = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 font-sans">
      <h1 className="text-center text-2xl font-extrabold mb-6">Мои заказы</h1>
      <hr className="border-gray-300 mb-6" />

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">История заказов</h2>
        {orders.map((order) => (
          <div key={order.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4">
            <div className="flex flex-col gap-2">
              <span className="text-gray-700">Номер заказа: {order.orderNumber}</span>
              <span className="text-gray-700">Дата: {order.date}</span>
              <span className="text-gray-700">Статус: {order.status}</span>
              <span className="text-gray-700">Сумма: {order.total} грн</span>
            </div>
            <button
              onClick={() => handleOpenDetails(order.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
            >
              Детали
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MyOrders;

/* Tailwind CSS Styles */
/* No additional CSS file is needed as Tailwind is applied inline. */
