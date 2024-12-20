import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order; // Получаем данные заказа из state

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

      <h1 className="text-2xl font-bold mb-6">Детали заказа #{order.order_id}</h1>
      <hr className="mb-6" />

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Список книг</h2>
        {order.details?.books ? (
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
        ) : (
          <p className="text-gray-700">Книги отсутствуют</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Адрес доставки</h2>
        <p className="text-gray-700">{order.details?.address || "Адрес не указан"}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Итоговая сумма</h2>
        <p className="text-gray-800 font-semibold">{order.money} грн</p>
      </div>
    </div>
  );
}

export default OrderDetails;
